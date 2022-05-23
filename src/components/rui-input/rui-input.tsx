import { Component, Fragment, h, Prop } from "@stencil/core";

@Component({
    tag: "rui-input",
    styleUrl: "rui-input.css",
    shadow: true
})

export class RuiInput {
    @Prop() label?: string;
    @Prop() floatingLabel?: string;
    @Prop() placeholder?: string;
    @Prop() elemName: string;

    render() {
        return (
            <div class={`relative`}>
                {
                    this.floatingLabel ? (
                        <Fragment>
                            <input id="labeler" type="text" class={`peer pl-3 py-1 max-w-lg transition-all duration-300 outline-none ring-2 ring-sylver-600 focus:ring-kunzite-600 ${this.placeholder && !this.floatingLabel ? "" : "placeholder-transparent"} rounded-xl`} placeholder={`${this.placeholder ? this.placeholder : "estoesunejemplo@es.com"} `} />
                            <label htmlFor="labeler" class="absolute left-3 -top-6 text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-1 peer-focus:text-sm peer-focus:-top-6 duration-300 select-none transition-all"><span>{this.floatingLabel}</span></label>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <input id="labeler" type="text" class={`peer pl-3 py-1 max-w-lg transition-all duration-300 outline-none ring-2 ring-sylver-600 focus:ring-kunzite-600 ${this.placeholder ? "" : "placeholder-transparent"} rounded-xl`} placeholder={`${this.placeholder ? this.placeholder : "estoesunejemplo@es.com"} `} />
                            <label htmlFor="labeler" class="absolute left-3 text-sm -top-6 select-none"><span>{this.label}</span></label>
                        </Fragment>
                    )
                }
            </div>
        );
    }
}