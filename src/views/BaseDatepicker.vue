<template>
  <div class="base-datepicker">
    <input
      type="date"
      :name="name"
      :placeholder="placeholder"
      :class="['form-control', inputClass]"
      v-model="localValue"
      @input="updateValue($event.target.value)"
    />
    <i :class="prependIcon"></i>
  </div>
</template>

<script>
export default {
  name: "BaseDatepicker",
  props: {
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    prependIcon: {
      type: String,
      default: "",
    },
    inputClass: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      localValue: this.value,
    };
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
  watch: {
    value(newValue) {
      this.localValue = newValue;
    },
  },
};
</script>

<style>
.base-datepicker {
  position: relative;
  display: flex;
  align-items: center;
}

.base-datepicker i {
  position: absolute;
  left: 10px;
  color: #ccc;
}
</style>
