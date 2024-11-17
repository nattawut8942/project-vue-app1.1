<template lang="">
    <div class="container">
        <div class="row align-items-center g-lg-5 py-5">
            <div class="col-lg-7 text-center text-lg-start">
                <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
                <p class="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.0044412699003!2d-3.6909086239871822!3d40.45303867143374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228e23705d39f%3A0xa8fff6d26e2b1988!2z4Liq4LiZ4Liy4Lih4LiB4Li14Lis4Liy4LiL4Liy4LiZ4LmA4LiV4Li14Lii4LmC4LiBIOC5gOC4muC4o-C5jOC4meC4suC5gOC4muC4pw!5e0!3m2!1sth!2sth!4v1726384347283!5m2!1sth!2sth" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="col-md-10 mx-auto col-lg-5">
                <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"> Remember me
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                    <hr class="my-4">
                    <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
                </form>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: 'Contact',
  components: {
    
  }
    
}
</script>
<style scoped>
    body {
            height: 100vh; /* ความสูงของ body เท่ากับความสูงของหน้าจอ */
            display: flex;
            justify-content: center; /* จัดกลางแนวนอน */
            align-items: center; /* จัดกลางแนวตั้ง */
            background-color: #f8f9fa; /* สีพื้นหลัง */
        }
        .container {
            width: 100%; /* ความกว้างเต็มที่ */
            max-width: 900px; /* ความกว้างสูงสุด */
            padding: 20px; /* เพิ่ม padding */
            border-radius: 8px; /* ทำให้มุมมน */
            background-color: #ffffff; /* สีพื้นหลังของคอนเทนเนอร์ */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* เงา */
        }
</style>