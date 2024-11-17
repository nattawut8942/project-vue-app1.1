<template lang="">
    <div>
        <div class="container my-5 ">
      <div class="row">
    <main class="col-md-4  mx-auto ">
        <form> 
          <div class="text-center mt-5">
          <!-- <img class="mb-4" src="img/Real-Madrid-Logo.png" alt="" width="180" height="100"> --> 
          <img alt="POP MART" class="ant-image-img" src="https://cdn-global-eude.popmart.com/global-web/eude-prod/assets/images/logo.png?x-oss-process=image/format,webp" width="180" height="100" style="height: 100%;">
         
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1></div>
          
          <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
      
          <div class="form-check text-start my-3">
            <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
          <a href="All product.html"><button class="btn btn-primary w-100 py-2 my-3" type="submit">Back Home</button></a>
          <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
      </main>
    </div>
    
  </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
  components: {
    
  }
    
}
</script>
<style lang="">
    
</style>