<template>
  <div class="slider-wrapper">
    <div class="slider" ref="slider">
      <div class="slider-group" ref="sliderGroup">
        <div class="slider-item">
          <a href="">
            <img src="../../common/images/pic_1.jpg" alt="">
          </a>
        </div>
        <div class="slider-item">
          <a href="">
            <img src="../../common/images/pic_2.jpg" alt="">
          </a>
        </div>
        <div class="slider-item">
          <a href="">
            <img src="../../common/images/pic_3.jpg" alt="">
          </a>
        </div>
        <div class="slider-item">
          <a href="">
            <img src="../../common/images/pic_4.jpg" alt="">
          </a>
        </div>
        <div class="slider-item">
          <a href="">
            <img src="../../common/images/pic_5.jpg" alt="">
          </a>
        </div>
        <div class="slider-item">
          <a href="">
            <img src="../../common/images/pic_6.jpg" alt="">
          </a>
        </div>
        <div class="slider-item">
          <a href="">
            <img src="../../common/images/pic_7.jpg" alt="">
          </a>
        </div>
      </div>
      <div class="dots">
        <span class="dot" :class="{active:currentPageIndex === index}" v-for="(item, index) in dots" :key="index"></span>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
const COMPONENT_NAME = 'slide';
export default {
  name: COMPONENT_NAME,
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    },
    showDot: {
      type: Boolean,
      default: true
    },
    click: {
      type: Boolean,
      default: true
    },
    threshold: {
      type: Number,
      default: 0.3
    },
    speed: {
      type: Number,
      default: 400
    }
  },
  data () {
    return {
      dots: [],
      currentPageIndex: 0
    };
  },
  mounted () {
    this.update();
    window.addEventListener('resize', () => {
      if (!this.slide || !this.slide.enabled) {
        return;
      }
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        if (this.slide.isInTransition) {
          this._onScrollEnd();
        } else {
          if (this.autoPlay) {
            this._play();
          }
        }
        this.refresh();
      }, 60);
    });
  },
  activated () {
    if (!this.slide) {
      return;
    }
    this.slide.enable();
    let pageIndex = this.slide.getCurrentPage().pageX;
    this.slide.goToPage(pageIndex, 0, 0);
    this.currentPageIndex = pageIndex;
    if (this.autoPlay) {
      this._play();
    }
  },
  deactivated () {
    this.slide.disable();
    clearTimeout(this.timer);
  },
  beforeDestroy () {
    this.slide.disable();
    clearTimeout(this.timer);
  },
  methods: {
    update () {
      if (this.slide) {
        this.slide.destroy();
      }
      this.$nextTick(() => {
        this.init();
      });

    },
    refresh () {
      this._setSlideWidth(true);
      this.slide.refresh();
    },
    prev () {
      this.slide.prev();
    },
    next () {
      this.slide.next();
    },
    init () {
      clearTimeout(this.timer);
      this.currentPageIndex = 0;
      this._setSlideWidth();
      if (this.showDot) {
        this._initDots();
      }
      this._initSlide();
      if (this.autoPlay) {
        this._play();
      }
    },
    _setSlideWidth (isResize) {
      this.children = this.$refs.sliderGroup.children;
      let width = 0;
      let slideWidth = this.$refs.slider.clientWidth;
      this.$refs.slider.style.width = slideWidth + 'px';
      console.log(slideWidth);
      for (let i = 0; i < this.$refs.sliderGroup.children.length; i++) {
        let child = this.children[i];
        // addClass(child, 'slide-item')
        child.style.width = slideWidth + 'px';
        width += slideWidth
      }
      if (this.loop && !isResize) {
        width += 2 * slideWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px';
      console.log(this.$refs.sliderGroup.style.width + "__" + this.$refs.slider.style.width);
    },
    _initSlide () {
      console.log(this.threshold);
      this.slide = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: this.threshold,
          speed: this.speed
        },
        bounce: false,
        stopPropagation: true,
        click: this.click
      })
      this.slide.on('scrollEnd', this._onScrollEnd);
      this.slide.on('touchEnd', () => {
        if (this.autoPlay) {
          this._play();
        }
      });
      this.slide.on('beforeScrollStart', () => {
        if (this.autoPlay) {
          clearTimeout(this.timer);
        }
      });
    },
    _onScrollEnd () {
      let pageIndex = this.slide.getCurrentPage().pageX;
      this.currentPageIndex = pageIndex;
      if (this.autoPlay) {
        this._play();
      }
    },
    _initDots () {
      this.dots = new Array(this.children.length);
    },
    _play () {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.slide.next()
      }, this.interval)
    }
  }
};
</script>

<style lang="sass" type="text/sass">
@import "../../common/style/variable.sass"

.slider-wrapper
  position: relative
  margin-top: 90px
  width: 100%
  overflow: hidden
  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space:  nowrap
      .slider-item
        float: left
        box-sizing: border-box
        text-align: center
        a
          display: block
          width:  100%
          overflow: hidden
          text-decoration: none
          img
            display: block
            width:  100%
    .dots
      position: absolute
      right:  0
      left: 0
      bottom: 12px
      transform:  translateZ(1px)
      text-align: center
      font-size:  0
      .dot
        display: inline-block
        margin: 0 4px
        width:  8px
        height: 8px
        border-radius: 50%
        background: $color-text-ll
        transition: width .3s
        &.active
          width: 20px
          border-radius: 5px
          background: $color-active-text
</style>
