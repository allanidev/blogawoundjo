<template>
    <div class="widget rounded">
                <div class="widget-header text-center">
                  <h3 class="widget-title">NewsLetter</h3>
                  <img src="assets/images/wave.svg" class="wave" alt="wave" />
                </div>
                <div class="widget-content">
                  <span class="newsletter-headline text-center mb-3">Adresse Email</span>
                  <form>
                    <div class="mb-2">
                      <input class="form-control w-100 text-center" placeholder=" adresse Email " type="email">
                    </div>
                    <button class="btn btn-default btn-full" type="submit">S'inscrire</button>
                  </form>
                  <span class="newsletter-privacy text-center mt-3">En vous inscrivant, vous acceptez notre <a href="#">Politique de confidentialité</a></span>
                </div>		
              </div>
</template>

<script>

export default {
  name: 'NewlesterComponent',
  components: {
   
  },
 
}
</script>