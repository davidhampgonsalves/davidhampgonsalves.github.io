+++
title = "Change Gnome Shell Dash Key Binding"
date = "2012-04-30"
tags = ["gconf", "gnome shell"]
+++
Most of the key binding can be configured from the system settings > Keyboard area with the exception of the configuring the dash or overview overlay, which by default is bound to the left super key. This can be problematic in certain cases and especially in the case of some VM's.

To change this binding you need to modify the gconf settings by doing something like the following

```bash
gconftool-2 -s /apps/mutter/general/overlay_key Super_R -t string
```

This line when run from the termainal tells the gconf tool that you want to *set(-s)* the overlay_key property to the *Super_R key*(or whatever you want to bind it to) and that this property is of *type(-t)* string.
