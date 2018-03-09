import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Carousel from "../components/dynamic-carousel.vue";
import Vue from "vue";

Vue.component("carousel", Carousel);

storiesOf("Carousel", module).add("with text", () => ({
  template: "<carousel />"
}));
