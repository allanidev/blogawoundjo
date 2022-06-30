<template>
 
 <div class="col-lg-8">
	
      <!-- post -->
      <div class="post post-carousel" v-for="post in posts" v-bind:key="post">
        <h5 class="post-title mb-0 mt-4"><a href="blog-single.html">5 Easy Ways You Can Turn Future Into Success</a></h5>
        <ul class="meta list-inline mt-2 mb-0">
          <li class="list-inline-item"><a href="#">Katen Doe</a></li>
          <li class="list-inline-item">29 March 2021</li>
        </ul>
        
        <div class="row">
          <div class="col">
              <div class="thumb rounded">
            <a href="/" class="category-badge position-absolute">Lire plus</a>
            <a href="blog-single.html">
              <div class="inner">
                <img src="assets/images/widgets/widget-carousel-1.jpg" alt="post-title" />
              </div>
            </a>
          </div>
          </div>
          <div class="col">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, enim est? Minima modi in natus atque laudantium voluptates quo, nisi nostrum repellat veritatis aperiam sunt? Vitae voluptatem totam veritatis sint!
            </p>
          </div>
        </div>
      </div>
      <!-- post -->

  </div>
</template>

<script>

export default {
  name: 'ListArticleView',
  components: {
   
  },
  data(){
    return {
      posts: [1,2,3,4,5,6,7]
    }
  }
}
</script>
