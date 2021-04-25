const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

$('#signIn').click(function (e) {
	document.title = 'Login Page'
	window.history.replaceState(null, null, '/login')
})

$('#signUp').click(function (e) {
	document.title = 'Register Page'
	window.history.replaceState(null, null, '/register')
})

$('#register').click(function () {

	let fullname = $('#fullname').val();
	let email = $('#email').val();
	let password = $('#password').val();
	let rePassword = $('#rePassword').val();

	const regex = new RegExp('(?=.{8,})(?=.*[A-Z])');
	if (fullname && email && password && rePassword) {
		if (regex.test(password)) {
			if (password === rePassword) {
				$('#validationMessage').text('')
				$('#successMessage').text('')
				let data = {
					"fullname": fullname,
					"email": email,
					"password": password,
					"rePassword": rePassword
				}
				$.ajax({
					url: '/register',
					type: "POST",
					contentType: "application/json",
					async: true,
					data: JSON.stringify(data),
					success: function (result) {
						if (result.existEmail) {
							$('#validationMessage').text('Email của bạn đã tồn tại')
						}
						if (result.registerSuccess) {
							$('#successMessage').text('Đăng ký thành công')
							setTimeout(function () {
								$('#container').removeClass('right-panel-active')
								document.title = 'Login Page'
								window.history.replaceState(null, null, '/login')
							}, 1000)
						}
					}
				})
			} else {
				$('#validationMessage').text('Mật khẩu không khớp')
			}
		} else {
			$('#validationMessage').text('Mật khẩu phải hơn 8 ký tự và chứa ít nhất 1 ký tự HOA và 1 ký tự thường')
		}
	} else {
		$('#validationMessage').text('Tất cả các vùng nhập không được để trống')
	}
})