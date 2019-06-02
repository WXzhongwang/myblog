<template>
	<div class="welcome">
    <canvas id='canvas' @click="go"></canvas>
	</div>
</template>
<script>
import { Vector, Leaf, Branch, Tree } from "@/components/canvas/Tree";
export default {
  name: 'welcome',
  mounted() {
      var canvas = document.getElementById('canvas'),
          ctx = canvas.getContext('2d')
          ctx.globalCompositeOperation = "lighter"

      var body = document.querySelector("body")
      var canvas_width = window.innerWidth
      var canvas_height = window.innerHeight

      canvas.width  = canvas_width
      canvas.height = canvas_height


      var center_x = canvas_width / 2
      var stretch_factor = 600 / canvas_height
      var y_speed = 3 / stretch_factor
      var statMsg = document.querySelector("#statMsg");

      var t = new Tree()
      t.init(ctx)
      for (var i = 0; i < 3; i++) {
        new Branch(new Vector(center_x, canvas_height), new Vector(Math.random(-1, 1), -y_speed), 15 / stretch_factor, Branch.randomrgba(0, 255, 0.3), t)
      }

      t.render(function () {});
  },
  methods: {
    go: function(){
        this.$router.push({ path: '/home' })
    }
  }
}
</script>
<style lang="scss" scoped>
canvas {
  background-color: #000;
  cursor: pointer;
  position: fixed;
  left: 0;
} 
</style>
