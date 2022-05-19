import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: "rui-radio",
    styleUrl: "rui-radio.css",
    shadow: true
})

export class RuiRadio {

    @Prop() label?: string;

    render() {
        return (
            <div class="">
                RADIO
            </div>
        )
    }
}