import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: "rui-avatar",
    styleUrl: "rui-avatar.css",
    scoped: true
})

export class RuiAvatar {
    @Prop({mutable: true, reflect: true}) size?: "6" | "8" | "10" | "12" = "6";
    @Prop({mutable: true, reflect: true}) type?: "base" | "rounded" = "base";
    @Prop() name?: string

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
            <span class={`relative w-${this.size} h-${this.size} ${this.type === 'base' ? 'rounded-[32%]' : 'rounded-full'} bg-sylver-700 block`}>
                <span class="text-[11.1px] absolute top-3 left-3 opacity-40"><slot name="title"></slot></span>
            </span>
        );
    }
}