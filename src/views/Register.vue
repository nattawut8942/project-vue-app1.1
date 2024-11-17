<template lang="">
      <div class="container mt-5 flex-5">
        <h2 class="text-center">Register</h2>
        <form>
            <div class="mb-3 ">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" required>
            </div>
            <div class="mb-3">
                <label for="confirmPassword" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirmPassword" required>
            </div>
            <button type="submit" class="btn btn-primary w-100">Register</button> <!-- ทำให้ปุ่มกว้างเต็มที่ -->
        </form>
    </div>
    
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
    body {
            height: 100vh; /* ให้ความสูงของ body เท่ากับความสูงของหน้าจอ */
            display: flex;
            justify-content: center; /* จัดกลางแนวนอน */
            align-items: center; /* จัดกลางแนวตั้ง */
        }
        .container {
            width: 100%; /* ให้ความกว้างเต็มที่ */
            max-width: 400px; /* กำหนดความกว้างสูงสุด */
            padding: 20px; /* เพิ่ม padding */
            border: 1px solid #ccc; /* เพิ่มเส้นขอบ */
            border-radius: 8px; /* ทำให้มุมมน */
            background-color: #f8f9fa; /* สีพื้นหลัง */
        }
</style>