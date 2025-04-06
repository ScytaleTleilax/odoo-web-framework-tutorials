import { Component, markup, useState } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { Card } from "./card/card";

export class Playground extends Component {

    static template = "awesome_owl.playground";
    static components = { Counter, Card };

    setup() {

        this.string1 = "<div class='text-primary bg-dark'> string1 <div/>";
        this.string2 = markup("<div class='text-primary bg-light'> string1 <div/>");

        this.sum = useState({ value: 2 });
    }

    incrementSum() {
        this.sum.value++;
    }
}