<template>
   <!-- site wrapper -->
  <div class="site-wrapper">

    <div class="main-overlay"></div>

    <!-- header -->
    <header-component/>
    

    <!-- section main content -->
    <section class="main-content mt-3">
      <div class="container-xl">

        <div class="row gy-4">

           <router-view/>

          <div class="col-lg-4">

            <!-- sidebar -->
            <div class="sidebar">
              <!-- widget about -->
              <SocialComponent/>

              <!-- widget popular posts -->
              <PopularComponent/>

              <!-- widget categories -->
               <PartenaireComponent/>

              <!-- widget newsletter -->
             
                  <NewlesterComponent/>
              <!-- widget post carousel -->
                   <ThemeComponent/>

              <!-- widget advertisement -->
              

              <!-- widget tags -->
              

            </div>

          </div>

        </div>

      </div>
    </section>


    <!-- footer -->
      <FooterComponent/>

  </div>
  <!-- end site wrapper -->

  <!-- search popup area -->
  <div class="search-popup">
    <!-- close button -->
    <button type="button" class="btn-close" aria-label="Close"></button>
    <!-- content -->
    <div class="search-content">
      <div class="text-center">
        <h3 class="mb-4 mt-0">Appuyez sur ESC pour fermer</h3>
      </div>
      <!-- form -->
      <form class="d-flex search-form">
        <input class="form-control me-2" type="search" placeholder="Rechercher un article ..." aria-label="Search">
        <button class="btn btn-default btn-lg" type="submit"><i class="icon-magnifier"></i></button>
      </form>
    </div>
  </div>

  <!-- canvas menu -->
  <div class="canvas-menu d-flex align-items-end flex-column">
    <!-- close button -->
    <button type="button" class="btn-close" aria-label="Close"></button>

    <!-- logo -->
    <div class="logo">
      <img src="assets/images/logo.png" alt="blogawoundjo" />
    </div>

    <!-- menu -->
    <nav>
      <ul class="vertical-menu">
        <li class="active">
          <a href="index.html">Home</a>
          <ul class="submenu">
            <li><a href="index.html">Magazine</a></li>
            <li><a href="personal.html">Personal</a></li>
            <li><a href="personal-alt.html">Personal Alt</a></li>
            <li><a href="minimal.html">Minimal</a></li>
            <li><a href="classic.html">Classic</a></li>
          </ul>
        </li>
        <li><a href="category.html">Lifestyle</a></li>
        <li><a href="category.html">Inspiration</a></li>
        <li>
          <a href="#">Pages</a>
          <ul class="submenu">
            <li><a href="category.html">Category</a></li>
            <li><a href="blog-single.html">Blog Single</a></li>
            <li><a href="blog-single-alt.html">Blog Single Alt</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>

    <!-- social icons -->
    <ul class="social-icons list-unstyled list-inline mb-0 mt-auto w-100">
      <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
      <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
      <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
      <li class="list-inline-item"><a href="#"><i class="fab fa-pinterest"></i></a></li>
      <li class="list-inline-item"><a href="#"><i class="fab fa-medium"></i></a></li>
      <li class="list-inline-item"><a href="#"><i class="fab fa-youtube"></i></a></li>
    </ul>
  </div>
</template>


<script>

import HeaderComponent from './components/HeaderComponent.vue';
import SocialComponent from './components/SocialComponent.vue';
import PopularComponent from './components/PopularComponent.vue';
import NewlesterComponent from './components/NewlesterComponent.vue';
import PartenaireComponent from './components/PartenaireComponent.vue';
import ThemeComponent from './components/ThemeComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {

  components: {
    HeaderComponent,
    SocialComponent,
    PopularComponent,
    NewlesterComponent,
    PartenaireComponent,
    ThemeComponent,
    FooterComponent
  }
}

</script>