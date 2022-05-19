import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: "rui-button",
    styleUrl: "rui-button.css",
    shadow: true
})

export class RuiButton {
    @Prop() label: string;

    render() {
        return (
            <button class="bg-jasper-200 flex items-center text-amber-500 duration-300 hover:text-jasper-400 select-none w-fit h-6 px-2 py-1 text-[11.1px] rounded-md">
                {this.label}
            </button>
        );
    }
}