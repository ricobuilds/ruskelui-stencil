import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: "rui-avatar",
    styleUrl: "rui-avatar.css",
    shadow: true
})

export class RuiAvatar {
    @Prop() size?: "3" | "4" | "6" | "8" = "4";
    @Prop() type?: "rounded-full" | "rounded-md" | "rounded-lg" | "rounded-full" | "rounded-xl";

    render() {
        return (
            <div class={`w-8 h-8 rounded-xl bg-sylver-900`}></div>
        );
    }
}