<template>
  <nuxt-link :to="to" :target="target">
    <span class="container">
      <svg
        class="link-ico"
        width="13"
        height="14"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.13989 9.41358L6.91919 8.62256C6.14575 8.56397 5.64185 8.32959 5.26099 7.94873C4.2356 6.92334 4.24146 5.47022 5.25513 4.45654L7.16528 2.54639C8.19067 1.52686 9.63208 1.521 10.6575 2.54639C11.6829 3.57178 11.6711 5.01904 10.6575 6.03272L9.50903 7.18115C9.6731 7.55615 9.70825 7.98975 9.64966 8.37061L11.3723 6.65381C12.7727 5.24756 12.7844 3.26123 11.3665 1.8374C9.94263 0.413575 7.95044 0.425294 6.54419 1.83154L4.54614 3.83545C3.13989 5.2417 3.12817 7.23389 4.552 8.65186C4.92114 9.021 5.38989 9.28467 6.13989 9.41358ZM6.28638 4.58545L5.50708 5.37647C6.28052 5.44092 6.78442 5.66943 7.16528 6.05029C8.19067 7.07568 8.18482 8.52881 7.17114 9.54248L5.25513 11.4526C4.2356 12.4722 2.79419 12.478 1.7688 11.4585C0.743409 10.4272 0.749269 8.98584 1.7688 7.96631L2.91724 6.81787C2.75318 6.44873 2.71216 6.00928 2.77661 5.62842L1.05396 7.34522C-0.346434 8.75147 -0.358153 10.7437 1.05982 12.1616C2.48364 13.5855 4.47583 13.5737 5.87622 12.1733L7.88013 10.1636C9.28638 8.75733 9.2981 6.76514 7.87427 5.34717C7.50513 4.97803 7.03638 4.71436 6.28638 4.58545Z"
          fill="#ADADAD"
        />
      </svg>
      <span class="text">
        <text-paragraph-element>
          <slot />
        </text-paragraph-element>
      </span>
    </span>
  </nuxt-link>
</template>

<script lang="ts">
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      required: false,
      default: undefined,
      validator(prop: string | undefined) {
        return ["_blank", undefined, "_self"].includes(prop);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  transition-duration: 0.25s;

  &:hover {
    opacity: 0.8;
  }
}

.link-ico {
  flex-shrink: 0;
}

.text {
  display: block;
  margin-left: 8px;
}
</style>
