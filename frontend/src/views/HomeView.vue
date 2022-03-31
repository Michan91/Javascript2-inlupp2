<template>
  <div class="home">
    <h3 class="text-dark">Välkommen hem till oss på Mittljus</h3>
    <div class="container">

<div id="carouselExampleCrossfade" class="carousel slide carousel-fade mt-5" data-mdb-ride="carousel">
  <div class="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselExampleCrossfade"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselExampleCrossfade"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselExampleCrossfade"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_800,h_534/https://slowlivinghome.se/wp-content/uploads/2021/11/5280600221_5280600222_5280600223_5280602721_5280602722_5299001600_5280602723_Preview.jpg" class="d-block w-100" style="max-height: 500px"/>
    </div>
    <div class="carousel-item">
      <img src="https://resources.mynewsdesk.com/image/upload/t_limit_1000/xugmdshwili3hhhrmcz2.jpg" class="d-block w-100" style="max-height: 500px"/>
    </div>
    <div class="carousel-item">
      <img src="https://resources.mynewsdesk.com/image/upload/f_auto,t_limit_1000/atp7dpzwx3wkxfhqzpul.jpg" class="d-block w-100" style="max-height: 500px"/>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
  </div>

  
</template>

<script>


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style scoped>
/* .shopping-cart {
    min-width: 450px;
  } */
.carousel-inner img {
  object-fit: cover;
}


</style>
