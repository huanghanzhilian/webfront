<template>
    <transition name="toast-fade">
        <div class="toast-wrap" v-show="showing">{{text}}</div>
    </transition>
</template>

<script>
    const DEFAULT_DURATION = 1500;
    //import Utils from './Utils';
    export default {
        name: 'toast',
        data() {
            return {
                text: '',//文字
                showing: false,//是否显示
                timer: null//
            };
        },
        mounted: function() {
            //console.log('toast mounted...');
            // 将公共方法注册到Utils中
            //Utils.register('toast', this.show);
        },
        methods: {
            /**
             * [show description]
             * @param  {[type]} text     [提示文字]
             * @param  {[type]} duration [时间]
             * @return {[type]}          [description]
             */
            show: function(text, duration) {
                this.text = text;
                this.showing = true;
                if (this.timer) {
                    clearInterval(this.timer);
                }
                this.timer = setTimeout(() => {
                    this.showing = false;
                }, duration || DEFAULT_DURATION);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .toast-wrap {
        @include centeraa;
        //width: 50%;
        background-color: rgba(0, 0, 0, 0.5);
        color: #ffffff;
        text-align: center;
        padding: 5px 15px;
        font-size: 12px;
        border-radius: 5px;
    }
    .toast-fade-enter-active, .toast-fade-leave-active {
        transition: opacity .5s;
    }
    .toast-fade-enter, .toast-fade-leave-active {
        opacity: 0
    }
</style>