<template>
	<div class="db_swiper">
		<swiper :options="swiperOption">
		   <div class="banner">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for = "(item, index) of bannerlist" :key="index">
            <img :src="item" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
		  <div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>
<script type="text/javascript">
	import {mapState, mapActions} from 'vuex'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default {
		name: 'carrousel',
		//props:['sliders'],
		data() {
		    return {
		      swiperOption: {
		      	initialSlide:1,
		        autoplay: 5000,
		        loop: true,
		        setWrapperSize :true,
		        pagination : '.swiper-pagination',
		        paginationClickable :true,
		        observeParents:true
		      }
		  	}
		},
		computed: {
			//映射数据
            ...mapState([
                'sliders'
            ])
        },
		mounted() {
		    //获取图片列表
			this.getSliders(),
			this.getHomeBannerList()
		},
		methods: {
        	...mapActions([
					'getSliders',
					'getHomeBannerList'
			])
        },
		components: {
		   	swiper,
		    swiperSlide
		}
	}
</script>
<style scoped>
 .banner {
  height: 6rem;
  border: 1px solid #f66;
}
	.db_swiper{
		margin: 2px 0 5px;
	}
	.db_swiper .swiper-slide{
		height: 100px;
		background-color: #e0e0e0;
	}
	.db_swiper .swiper-slide img{
		width: 100%;
		height: 100%;
	}
</style>

