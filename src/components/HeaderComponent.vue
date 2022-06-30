<template>
    
    <header class="header-default">
      <nav class="navbar navbar-expand-lg">
        <div class="container-xl">
          <!-- site logo -->
          <a class="navbar-brand" href="#"><img src="assets/images/logo.png" alt="logo" /></a> 

          <div class="collapse navbar-collapse">
            <!-- menus -->
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown active">
                <a class="nav-link " href="#">BLOG</a>
               
              </li>
              
             
            </ul>
          </div>

          <!-- header right section -->
          <div class="header-right">
            <!-- social icons -->
            <ul class="social-icons list-unstyled list-inline mb-0">
              <li class="list-inline-item"><a href="https://www.facebook.com/MUTUELLESANTEAWOUNDJO"><i class="fab fa-facebook-f"></i></a></li>
              <li class="list-inline-item"><a href="https://www.linkedin.com/company/mutuelle-sante-awoundjo/"><i class="fab fa-twitter"></i></a></li>  
              <li class="list-inline-item"><a href="https://www.youtube.com/watch?v=_90vm28Jf3c"><i class="fab fa-youtube"></i></a></li>
            </ul>
            <!-- header buttons -->
            <div class="header-buttons">
              <button class="search icon-button">
                <i class="icon-magnifier"></i>
              </button>
              <button class="burger-menu icon-button">
                <span class="burger-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>

</template>

<script>
export default {
  name: 'HeaderComponent',
  components: {
   
  }
}

</script>