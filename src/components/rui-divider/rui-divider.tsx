import { Component, h, Prop } from "@stencil/core";


@Component({
    tag: "rui-divider",
    shadow: true
})

export class RuiDivider {
    @Prop() colour?: string = "#0c0c0c";
    @Prop() type: "horizontal" | "vertical";

    render(){
        return (
            <div style={{height: "1.5px", width: "40vw", backgroundColor: this.colour}}>
            </div>
        )
    }
}

