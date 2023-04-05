import styles from "./styles.module.css";
import {Image} from "react-bootstrap";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<html lang='en'>
			<head>
				<title>home</title>
				<meta charSet="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
			</head>
			<body>
			<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" className={styles.nav}>
  				<li class="nav-item" className={styles.navbar_bt1}>
    				<a class="nav-link" id="pills-home-tab" data-toggle="pill" href="/" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
  				</li>
  				<li class="nav-item" className={styles.navbar_bt2}>
    				<a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="/Contents" role="tab" aria-controls="pills-profile" aria-selected="false">Contents</a>
  				</li>
  				<li class="nav-item" className={styles.navbar_bt3}>
    				<a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="/Learn" role="tab" aria-controls="pills-contact" aria-selected="false">Learn</a>
  				</li>
				<li class="nav-item" className={styles.navbar_bt4}>
    				<a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="/Sac" role="tab" aria-controls="pills-contact" aria-selected="false">SAC</a>
				</li>
				<button className={styles.button} onClick={handleLogout}>
					Logout
				</button>
			</ul>
			<div className={styles.text}>
				<h3>Christu Jyothi Institute of Technology and science</h3>
			</div>
			<div className={styles.movebox1}></div>
			<div className={styles.movebox2}></div>
			<div className={styles.movebox3}></div>
			<div className={styles.movebox4}></div>
			<div className={styles.image1}>
				<Image class="image-fluid" width="400px" height="auto" src=""/>
			</div>
			<div className={styles.imgbox1}></div>
			<div className={styles.stars}></div>
			<div className={styles.star2}></div>
			<div className={styles.star3}></div>
			</body>
		</html>
	);
}

export default Main;
