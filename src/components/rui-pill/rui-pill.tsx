import { Component, Fragment, h, Prop } from "@stencil/core";

@Component({
    tag: "rui-pill",
    styleUrl: "rui-pill.css",
    shadow: true
})
export class RuiPill {
    @Prop() label!: string
    @Prop() iconBefore?: boolean;
    @Prop() iconAfter?: boolean;
    @Prop() textStyle: string = "text-jasper-500";
    @Prop() bgStyle: string = "bg-jasper-200";
    @Prop() textHoverStyle: string = "hover:text-jasper-400";

    render() {
        return (
            <div class={`${this.textStyle} ${this.textHoverStyle} ${this.bgStyle} flex items-center duration-300 uppercase select-none w-fit h-6 px-2 py-1 text-[11.1px] font-bold rounded-md`}>
                {this.iconAfter === true ? (
                    <Fragment>
                        <span style={{marginRight: "4px"}}>{this.label}</span>
                        <slot/>
                        
                    </Fragment>
                ) : (
                    <Fragment>
                        <slot></slot>
                        <span style={{marginLeft: "4px"}}>{this.label}</span>
                    </Fragment>
                )
                }
            </div>
        );
    }
}