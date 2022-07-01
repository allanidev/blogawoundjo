<template>
     <footer>
      <div class="container-xl">
        <div class="footer-inner">
          <div class="row d-flex align-items-center gy-4">
            <!-- copyright text -->
            <div class="col-md-4">
              <span class="copyright">©{{ new Date().getFullYear() }} mutuelle de santé awoundjo</span>
            </div>

            <!-- social icons -->
            <div class="col-md-4 text-center">
              <ul class="social-icons list-unstyled list-inline mb-0">
                <li class="list-inline-item"><a href="https://www.facebook.com/MUTUELLESANTEAWOUNDJO"><i class="fab fa-facebook-f"></i></a></li>
                <li class="list-inline-item"><a href="https://www.linkedin.com/company/mutuelle-sante-awoundjo/"><i class="fab fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="3 Easy Ways To Make Your iPhone Faster"><i class="fab fa-youtube"></i></a></li>
              </ul>
            </div>

            <!-- go to top button -->
            <div class="col-md-4">
              <a href="#" id="return-to-top" class="float-md-end"><i class="icon-arrow-up"></i>En haut</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>

export default {
  name: 'FooterComponent',
  components: {
   
  },
 
}
</script>