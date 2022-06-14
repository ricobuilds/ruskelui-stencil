import { Component, Fragment, h, Prop } from "@stencil/core";

@Component({
    tag: "rui-switch",
    styleUrl: "rui-switch.css",
    shadow: true
})

export class RuiSwitch {
    @Prop() label?: string;

    render() {
        return (
            <Fragment>
                <div class="block">
                <label class="relative w-10 h-4 m-0.5 flex items-center overflow-hidden rounded-md cursor-pointer">
                    <input type="checkbox" class="sr-only peer" id="check" />
                    <span class="w-full h-full bg-sylver-600 peer-checked:bg-[#655bff] duration-300 transition-all"></span>
                    <span class="w-3 h-3 left-1 bg-sylver-300 absolute duration-300 transition-all rounded-[32%] peer-checked:left-6"></span>
                </label>
                </div>
            </Fragment>
        );
    }
}