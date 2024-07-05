<template>
  <div id="app">
    <notifications group="foo" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // No need to import and register Notifications here
}
</script>
<style>
.bg-default{
  background: whitesmoke !important;
}
.pding{
  margin-top:-5rem !important ;
}
.btn-primary {
  width: 100% !important;
  background: #f65129 !important;
  color: white !important;
  border:none !important;
}
.btn-primary:focus {
    outline: none !important;
    border: none !important;
    outline-style: none  !important;

}
</style>
