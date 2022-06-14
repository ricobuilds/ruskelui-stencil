import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: "rui-avatar",
    styleUrl: "rui-avatar.css",
    scoped: true
})

export class RuiAvatar {
    @Prop({mutable: true, reflect: true}) size?: "6" | "8" | "10" | "12" = "6";
    @Prop({mutable: true, reflect: true}) type?: "base" | "rounded" = "base";

    // connectedCallback() {
    //     this.size = this.size.length > 0 ? this.size : "6";
    //     this.type = "base";
    // }
    componentDidUpdate() {
        this.size = this.size.length > 0 ? this.size : "6";
        this.type = this.type ? this.type : "base";
    }

    render() {
        return (
            <span class={`avatar-sm m-0.5 w-${this.size} h-${this.size} ${this.type === 'base' ? 'rounded-[32%]' : 'rounded-full'} bg-sylver-700 inline-block`}></span>
        );
    }
}