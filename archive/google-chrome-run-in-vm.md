# Virtualbox (Vagrant) - Linux Ubuntu 18.04 - Google Chrome (Stable / Beta) can't run - GPU unusable

## Problem

**when** run following command

```bash
google-chrome-stable
```

or

```bash
google-chrome-beta
```

**then** system return error "FATAL:gpu_data_manager_impl_private.cc(439)] GPU process isn't usable."

```bash
Gtk-Message: 13:12:12.891: Failed to load module "canberra-gtk-module"
Gtk-Message: 13:12:12.898: Failed to load module "canberra-gtk-module"
[5900:5935:0309/131213.315672:ERROR:bus.cc(393)] Failed to connect to the bus: Could not parse server address: Unknown address type (examples of valid types are "tcp" and on UNIX "unix")
[5900:5935:0309/131213.315709:ERROR:bus.cc(393)] Failed to connect to the bus: Could not parse server address: Unknown address type (examples of valid types are "tcp" and on UNIX "unix")
[5900:5935:0309/131213.477079:ERROR:bus.cc(393)] Failed to connect to the bus: Could not parse server address: Unknown address type (examples of valid types are "tcp" and on UNIX "unix")
[5900:5935:0309/131213.477157:ERROR:bus.cc(393)] Failed to connect to the bus: Could not parse server address: Unknown address type (examples of valid types are "tcp" and on UNIX "unix")
[5900:5900:0309/131213.609914:ERROR:browser_switcher_service.cc(238)] XXX Init()
[5900:5984:0309/131213.959146:ERROR:object_proxy.cc(632)] Failed to call method: org.freedesktop.DBus.Properties.Get: object_path= /org/freedesktop/UPower: org.freedesktop.DBus.Error.ServiceUnknown: The name org.freedesktop.UPower was not provided by any .service files
[5900:5984:0309/131213.959457:ERROR:object_proxy.cc(632)] Failed to call method: org.freedesktop.UPower.GetDisplayDevice: object_path= /org/freedesktop/UPower: org.freedesktop.DBus.Error.ServiceUnknown: The name org.freedesktop.UPower was not provided by any .service files
[5900:5984:0309/131213.959669:ERROR:object_proxy.cc(632)] Failed to call method: org.freedesktop.UPower.EnumerateDevices: object_path= /org/freedesktop/UPower: org.freedesktop.DBus.Error.ServiceUnknown: The name org.freedesktop.UPower was not provided by any .service files
../../sandbox/linux/seccomp-bpf-helpers/sigsys_handlers.cc:**CRASHING**:seccomp-bpf failure in syscall 0063
../../sandbox/linux/seccomp-bpf-helpers/sigsys_handlers.cc:**CRASHING**:seccomp-bpf failure in syscall 0063
../../sandbox/linux/seccomp-bpf-helpers/sigsys_handlers.cc:**CRASHING**:seccomp-bpf failure in syscall 0063
[5960:1:0309/131214.571462:ERROR:command_buffer_proxy_impl.cc(125)] ContextResult::kTransientFailure: Failed to send GpuChannelMsg_CreateCommandBuffer.
../../sandbox/linux/seccomp-bpf-helpers/sigsys_handlers.cc:**CRASHING**:seccomp-bpf failure in syscall 0063
../../sandbox/linux/seccomp-bpf-helpers/sigsys_handlers.cc:**CRASHING**:seccomp-bpf failure in syscall 0063
../../sandbox/linux/seccomp-bpf-helpers/sigsys_handlers.cc:**CRASHING**:seccomp-bpf failure in syscall 0063
../../sandbox/linux/seccomp-bpf-helpers/sigsys_handlers.cc:**CRASHING**:seccomp-bpf failure in syscall 0063
../../sandbox/linux/seccomp-bpf-helpers/sigsys_handlers.cc:**CRASHING**:seccomp-bpf failure in syscall 0063
../../sandbox/linux/seccomp-bpf-helpers/sigsys_handlers.cc:**CRASHING**:seccomp-bpf failure in syscall 0063
[5900:5917:0309/131215.706549:FATAL:gpu_data_manager_impl_private.cc(439)] GPU process isn't usable. Goodbye.
Trace/breakpoint trap (core dumped)
```

## Cause

There is a common Google Chrome error when trying to run it in Linux due to Chrome's GPU usage.

**link:** [Solving Google Chrome's gpu-process error message in Ubuntu Linux](https://simpleit.rocks/linux/ubuntu/fixing-common-google-chrome-gpu-process-error-message-in-linux/)

## Solution

The easiest solution is to avoid using GPU hardware acceleration with the following flags:

```bash
google-chrome-stable --disable-gpu --disable-software-rasterizer
```

Or enable [SwiftShader](https://opensource.google/projects/swiftshader) that provides high-performance graphics rendering on the CPU. SwiftShader allows Chromium and Google Chrome to support WebGL and other advanced 3D graphics on machines without 3D graphics hardware.

```bash
google-chrome-stable --use-gl=swiftshader
```

or

```bash
google-chrome --use-gl=swiftshade
```
