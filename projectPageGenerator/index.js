import { Octokit } from "@octokit/rest";
import fs from "fs";

async function fetchGHImageUrl(repo) {
  const { data: readmeData } = await octokit.rest.repos.getReadme({
    owner: username,
    repo: repo.name,
  });

  const readme = Buffer.from(readmeData.content, "base64").toString("ascii");
  const match = readme.match(/<img\s.*?src=(?:'|")([^'">]+)(?:'|")/);
  let imgUrl = match && match[1];
  if (!imgUrl) {
    readme.match(/\[Screenshot\]\((.+)\)/);
    imgUrl = match && match[1];
  }
  if (imgUrl) {
    if (imgUrl.indexOf("https://") !== 0)
      imgUrl = `https://raw.githubusercontent.com/davidhampgonsalves/${repo.name}/master/${imgUrl}`;
    imgUrl = imgUrl.replace("/blob/", "/raw/");
  }
  return imgUrl;
}

const octokit = new Octokit({ auth: process.env.GITHUB_API_READONLY });
const username = "davidhampgonsalves";

let { data: repos } = await octokit.rest.repos.listForUser({
  username,
  type: "public",
  per_page: 100,
});

// TODO: bring pinned to top (not currently in github rest api)
const pins = [
  "Solar-Game-of-Life",
  "Life-Dashboard",
  "Wall-Fountain",
  "CR14-emulator-for-CatGenie-120",
  "Gif-Twist",
  "Generative-Tree-Rings",
];
repos.sort((a, b) => {
  const aI = pins.indexOf(a.name);
  const bI = pins.indexOf(b.name);
  if (aI >= 0 && bI >= 0) return aI - bI;
  if (aI >= 0) return -1;
  if (bI >= 0) return 1;
  return new Date(b.created_at) - new Date(a.created_at);
});
repos.map((r) => r.name);

const imgNames = fs.readdirSync("../static/images/projects");
const output = [];
for (const repo of repos) {
  if (!repo.topics.includes("featured")) {
    console.log("skipping " + repo.name, repo.topics);
    continue;
  }

  console.log("processing", repo.name);

  let imgUrl = imgNames.find((n) =>
    n.toLowerCase().includes(repo.name.toLowerCase())
  );
  if (imgUrl) imgUrl = "/images/projects/" + imgUrl;
  else imgUrl = await fetchGHImageUrl(repo);

  const date = new Date(repo.created_at);
  const month = date.toLocaleString("default", { month: "long" });
  const dateStr = `${month} ${date.getFullYear()}`;

  const html = `
<div class=project>
  <div class=header>
    <h2>${repo.name.replaceAll("-", " ")}</h2>
    ${
      repo.stargazers_count > 5
        ? `<a class=stars href=${repo.stargazers_url}>★ ${repo.stargazers_count}</a>`
        : ""
    }<span class=date>${dateStr}</span>
  </div>
  <div class=container>
    <div class=content>
      <p>
        ${repo.description}
      </p>
      <ul>
        ${repo.topics
          .filter((t) => t !== "featured")
          .map((t) => `<li>${t}</li>`)
          .join(" ")}
      </ul>
      <div class=links>
        Links:
          <a href="${repo.html_url}">Github</a>${
    repo.homepage ? `, <a href="${repo.homepage}">Project Info</a>` : ""
  }
      </div>
    </div>
    ${imgUrl ? `<img src="${imgUrl}" />` : ""}
  </div>
</div>`;
  output.push(html);
}

const styleTag = fs.readFileSync("./index.css");
const post = `
+++
title = "Projects"
+++
  ${styleTag}
  ${output.join("\n")}
`;

console.log("writing to content/projects/index.md");
fs.writeFileSync("../content/projects/index.md", post);
