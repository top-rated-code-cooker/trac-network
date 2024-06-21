import "./mainframe.css";
import { useState, useEffect } from 'react';
import { useRef } from "react";
import { usePopper } from "react-popper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
interface  MainFrameProps {
	isConnected: boolean;
  accountAddress: string;
  onClickConnectButton: () => void;
  OnWalletDisconnect: () => void;
  modalOpened: boolean;
  htmlContent: string;
  setModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AddressPopoverProps {
	address: string;
	disconnectWallet: () => void;
  }
  
  function AddressPopover({ address, disconnectWallet }: AddressPopoverProps) {
	const [visible, setVisible] = useState(false);
	const referenceElement = useRef(null);
	const popperElement = useRef(null);
	const { styles, attributes } = usePopper(
	  referenceElement.current,
	  popperElement.current
	);
	return (
		<>
		  <button
			className="address-btn"
			ref={referenceElement}
			onClick={() => setVisible(!visible)}
			onBlur={() => setVisible(false)}
		  >
			<div className="wrapper">
			  <span>{address.slice(0, 4) + "..." + address.slice(-4)}</span>
			  <i
				className="addr-arrow-icon iconfont icon-chevron-down"
				style={{
				  transform: visible ? "rotate(180deg)" : "rotateY(0)",
				}}
			  ></i>
			</div>
		  </button>
		  <div
			className={`address-popover popover ${visible ? "is-visible" : "hidden"}`}
			style={styles.popper}
			ref={popperElement}
			{...attributes.popper}
		  >
			<div className="popover-content">
			  <div className="addr-menu-list">
				<div className="addr-menu-item">Orders</div>
				<div className="addr-menu-item">Sign In on Mobile</div>
				<button className="addr-menu-item" onClick={disconnectWallet}>
				  Disconnect
				</button>
			  </div>
			</div>
		  </div>
		</>
	  );
	}

export default function MainFrame( {
	isConnected,
	accountAddress,
	onClickConnectButton,
	OnWalletDisconnect,
	modalOpened,
	setModalOpened
} : MainFrameProps) {
	// var global = global || window;
	const [currentValue, setCurrentValue] = useState(40);
	const [showModal, setShowModal] = useState(false);
	const targetValue = 100;
	const step = 1;
	const duration = 2000; // 2 seconds

	useEffect(() => {
		setShowModal(true);
		const timer = setTimeout(() => {
			setShowModal(false);
		  }, 3000);
	  
		  // Clean up the timer when the component unmounts
		  return () => clearTimeout(timer);
	  }, []);

  
	useEffect(() => {
	  const startAnimation = () => {
		const interval = setInterval(() => {
		  if (currentValue < targetValue) {
			setCurrentValue((prevValue) => {
			  const newValue = prevValue + step;
			  return newValue > targetValue ? targetValue : newValue;
			});
		  } else {
			setCurrentValue(targetValue);
			clearInterval(interval);
		  }
		}, duration / (targetValue - currentValue));
	  };
  
	  const timeoutId = setTimeout(startAnimation, 5000); // Delay the start of the animation by 0.5 seconds
  
	  return () => {
		clearTimeout(timeoutId);
	  };
	}, [currentValue, targetValue, step, duration]);


	const toggleNavbar = () => {
		// setIsNavbarResponsive(!isNavbarResponsive);
		var navbar = document.getElementById("myNavbar");
                if (navbar?.classList.contains("responsive")) {
                    navbar.classList.remove("responsive");
                } else {
                    navbar?.classList.add("responsive");
                }
	  };

	const buttonClick = () => {
		setModalOpened(true);
		onClickConnectButton();
	}
	return (
		<div className="font-manrope ">
			<div data-elementor-type="wp-page" data-elementor-id="10" className="elementor elementor-10" data-elementor-post-type="page">
				 {showModal && (
					<div className="pix-page-loading-bg">
					<div className="wp-modal">
							
						<div className="page-container">
							<div className="image-container">
								<img src="https://trac.network/assets/TRAC_SYS_LOGO.svg" alt="My Image" />
							</div>
							</div>
						</div>
					</div>
				)}
				
				{!showModal && (
				<header className=
				"elementor-element elementor-element-edd567c e-con-full animated-fast elementor-hidden-mobile elementor-hidden-tablet e-flex e-con e-parent elementor-sticky elementor-sticky--effects animated fadeInDown elementor-sticky--active elementor-section--handles-inside" data-id="edd567c" data-element_type="container" data-settings="{&quot;sticky&quot;:&quot;top&quot;,&quot;animation&quot;:&quot;fadeInDown&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;sticky_offset&quot;:0,&quot;sticky_effects_offset&quot;:0}" 
				style={
					modalOpened ?
					{position: 'fixed',  width: '1903px', marginTop: '0px', marginBottom: '0px; top: 0px'}
					:
					{position: 'fixed', width: '1903px', marginTop: '0px', marginBottom: '0px; top: 0px'}
					}
					>
					<div data-section-name="Navbar" className="elementor-element elementor-element-c4a0bed e-con-full nav_background e-flex e-con e-child elementor-sticky" data-id="c4a0bed" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;sticky&quot;:&quot;top&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;sticky_offset&quot;:0,&quot;sticky_effects_offset&quot;:0}">
						<div className="elementor-element elementor-element-e8b3142 e-flex e-con-boxed e-con e-child" data-id="e8b3142" data-element_type="container">
							<div className="e-con-inner">
								<div className="elementor-element elementor-element-6a57e42 e-flex e-con-boxed e-con e-child" data-id="6a57e42" data-element_type="container">
									<div className="e-con-inner">
										<div className="elementor-element elementor-element-355ad44 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-html" data-id="355ad44" data-element_type="widget" data-widget_type="html.default">
											<div className="elementor-widget-container">
												<span className="navText">Developers ▼</span>
											</div>
										</div>
										<div className="elementor-element elementor-element-5b0fd56 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-html" data-id="5b0fd56" data-element_type="widget" data-widget_type="html.default">
											<div className="elementor-widget-container">
												<span className="navText">Resources ▼</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="elementor-element elementor-element-f549c9b e-flex e-con-boxed e-con e-child" data-id="f549c9b" data-element_type="container">
							<div className="e-con-inner">
								<div className="elementor-element elementor-element-d6c2b13 e-transform e-transform elementor-widget elementor-widget-image" data-id="d6c2b13" data-element_type="widget" data-settings="{&quot;_transform_translateY_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:-10,&quot;sizes&quot;:[]},&quot;_transform_scale_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:1.6,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_scale_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_scale_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="image.default">
									<div className="elementor-widget-container">
										<a href="https://trac.network/">
											<img decoding="async" src="https://trac.network/assets/TRAC_SYS_LOGO.svg" title="" alt="" loading="lazy" data-nsfw-filter-status="sfw" style={{visibility: 'visible'}}/>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="elementor-element elementor-element-53fee29 e-flex e-con-boxed e-con e-child" data-id="53fee29" data-element_type="container">
							<div className="e-con-inner">
								<div className="elementor-element elementor-element-dd08ce2 e-transform elementor-widget elementor-widget-html" data-id="dd08ce2" data-element_type="widget" data-settings="{&quot;_transform_translateY_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:-3,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateX_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_tablet&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]},&quot;_transform_translateY_effect_mobile&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:&quot;&quot;,&quot;sizes&quot;:[]}}" data-widget_type="html.default">
									<div className="elementor-widget-container nav-ecosystem">
										<div className="dropdown">
											<span className="dropbtn font-kdam">ECOSYSTEM ▼</span>
												<div className="dropdown-container">
													<div className="dropdown-content">
														<a href="https://trac.network/trac-core">
														</a>
													<div>
														<a href="https://trac.network/trac-core">
																<img decoding="async" src="https://trac.network/assets/TRAC_CORE_LOGO_NAV.svg" alt="TRAC"/>
														</a>
														<a href="https://trac.network/trac-core">Decentralized metaprotocol tracking for Bitcoin Ordinals
														</a>
													</div>
													<a href="https://trac.network/tap">
													</a>
													<div className="tap-logo"><a href="https://trac.network/tap">
														<img decoding="async" src="https://trac.network/assets/TRAC_CORE_LOGO_NAV.svg" alt="TAP"/>
														</a>
														<a href="https://trac.network/tap">OrdFi Enabling Protocol
														</a>
													</div>
													<a href="https://trac.network/Pipe">
													</a>
													<div>
														<a href="https://trac.network/Pipe">
															<img decoding="async" src="https://trac.network/assets/PIPE_LOGO_NAV.svg" alt="PIPE"/>
														</a>
														<a href="https://trac.network/Pipe">UTXO Token &amp; Collectible Protocol for Bitcoin
														</a>
													</div>

												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="elementor-element elementor-element-3855836 elementor-widget elementor-widget-html" data-id="3855836" data-element_type="widget" data-widget_type="html.default">
									<div className="elementor-widget-container y-transform">
										<a href="https://legacy.trac.network/tap.html" target="_blank">
											<span className="navTextWhite1 font-kdam">Tracker</span>
										</a>
									</div>
								</div>
								<div className="elementor-element elementor-element-5388d2a elementor-widget elementor-widget-button" data-id="5388d2a" data-element_type="widget" data-widget_type="button.default">
									<div className="elementor-widget-container">
										<div className="elementor-button-wrapper">
											{isConnected ? 
												<div className="address-dropdown">
													<AddressPopover
													address={accountAddress}
													disconnectWallet={OnWalletDisconnect}
													/>
												</div>
												 : 
												<a className="elementor-button elementor-button-link elementor-size-xs elementor-animation-shrink"  onClick={()=>buttonClick()}>
													<span className="elementor-button-content-wrapper">
														<span className="elementor-button-icon">
															<svg aria-hidden="true" className="e-font-icon-svg e-fas-external-link-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>			
														</span>
														<span className="elementor-button-text cursor-pointer">Connect Wallet
														</span>
													</span>
												</a>
												
											}
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
				)}

				<div className="elementor-element elementor-element-d9da816 elementor-hidden-desktop e-con-full e-flex e-con e-parent elementor-sticky elementor-sticky--effects elementor-sticky--active elementor-section--handles-inside" data-id="d9da816" data-element-type="container" data-settings="{&quot;sticky&quot;:&quot;top&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;sticky_offset&quot;:0,&quot;sticky_effects_offset&quot;:0}">
					<div className="elementor-element elementor-element-ec7b292 elementor-widget elementor-widget-html" data-id="ec7b292" data-element_type="widget" data-widget_type="html.default">
						<div className="elementor-widget-container">
							<meta charSet="UTF-8"/>
							<meta name="viewport" content="width=device-width, initial-scale=1"/>

							<div className="navbarWrapper">
								<div className="navbar" id="myNavbar">
									<button className="icon" onClick={toggleNavbar}>
									<i className="bi bi-list"></i>
									</button>
									<a href="https://trac.network/">
										<img decoding="async" className="tracSystems" src="https://trac.network/assets/TRAC_SYS_LOGO.svg" alt="TRAC Systems Logo"/>
									</a>
									<div className="nav-links">
										<div className="nav-link">
											<a className="full-size-link" href="https://legacy.trac.network/tap.html" target="_blank">
											TRACKER
											<img decoding="async" className="arrow" src="https://trac.network/assets/Tap_Arrow.svg" alt="Arrow"/>
											</a>
										</div>
										<div className="divider">

										</div>
										
										<div className="nav-link">
											<a className="full-size-link" href="/trac-core">
												<img decoding="async" src="https://trac.network/assets/TRAC_CORE_LOGO_NAV.svg" alt="Trac Core Logo"/>
											</a>
										</div>
										
										<div className="nav-link">
											<a className="full-size-link" href="/tap">
												<img decoding="async" src="https://trac.network/assets/TAP_LOGO_NAV.svg" alt="TAP Logo"/>
											</a>
										</div>
										<div className="nav-link">
											<a className="full-size-link" href="/Pipe">
												<img decoding="async" src="https://trac.network/assets/PIPE_LOGO_NAV.svg" alt="PIPE Logo"/>
											</a>
										</div>
										<div className="divider">

										</div>
										<div className="social-media-container">
											<a href="https://twitter.com/trac_btc">
												<img decoding="async" className="social-media-icon" src="https://trac.network/assets/XLogo.svg" alt="X Logo"/>
											</a>
											<a href="https://discord.gg/trac">
												<img decoding="async" className="social-media-icon" src="https://trac.network/assets/DiscordLogo.svg" alt="Discord Logo"/>
											</a>
											<a href="https://t.me/tap_protocol">
												<img decoding="async" className="social-media-icon" src="https://trac.network/assets/TelegramLogo.svg" alt="Telegram Logo"/>
											</a>
											<a href="https://github.com/BennyTheDev">
												<img decoding="async" className="social-media-icon" src="https://trac.network/assets/GithubLogo.svg" alt="Github Logo"/>
											</a>
										</div>
									</div>
								</div>
							</div>	
						</div>
					</div>
				</div>				

				<div className="elementor-element elementor-element-a5b217e e-flex e-con-boxed e-con e-parent" data-id="a5b217e" data-element_type="container">
					<div className="e-con-inner">
						<div className="elementor-element elementor-element-afc05f3 elementor-widget__width-initial topGradient animated-fast elementor-widget elementor-widget-heading" data-id="afc05f3" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeIn&quot;}" data-widget_type="heading.default">
							<div className="elementor-widget-container">
								<h1 className="elementor-heading-title elementor-size-default elementor-top font-custom">
								{"{"}
								<br/>
								&nbsp;”All” 
								<br/>
								&nbsp;”Things” 
								<br/>
								&nbsp;”Bitcoin” 
								<br/>
								{"} "}
								_
								</h1>
							</div>
						</div>
					</div>
				</div>

				<div className="elementor-element elementor-element-bfa4b0f elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-parent" data-id="bfa4b0f" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
					<div className="e-con-inner">
						<div className="elementor-element elementor-element-b3ba192 elementor-widget__width-initial elementor-widget elementor-widget-html" data-id="b3ba192" data-element_type="widget" data-widget_type="html.default">
							<div className="elementor-widget-container">
  								<span className="backedText">Backed by</span>
							</div>
						</div>
						<div className="elementor-element elementor-element-f41c869 e-con-full e-flex e-con e-child" data-id="f41c869" data-element_type="container">
							<div className="elementor-element elementor-element-6ef477b elementor-widget elementor-widget-image" data-id="6ef477b" data-element_type="widget" data-widget_type="image.default">
								<div className="elementor-widget-container">
													<img decoding="async" width="117" height="22" src="https://trac.network/wp-content/uploads/2023/12/RectanglePlaceholder.png" className="attachment-large size-large wp-image-79" alt="" />													
								</div>
							</div>
							<div className="elementor-element elementor-element-46168cb elementor-widget elementor-widget-image" data-id="46168cb" data-element_type="widget" data-widget_type="image.default">
								<div className="elementor-widget-container">
									<img decoding="async" width="117" height="22" src="https://trac.network/wp-content/uploads/2023/12/RectanglePlaceholder.png" className="attachment-large size-large wp-image-79" alt="" />													
								</div>
							</div>
							<div className="elementor-element elementor-element-92eba58 elementor-widget elementor-widget-image" data-id="92eba58" data-element_type="widget" data-widget_type="image.default">
								<div className="elementor-widget-container">
													<img decoding="async" width="117" height="22" src="https://trac.network/wp-content/uploads/2023/12/RectanglePlaceholder.png" className="attachment-large size-large wp-image-79" alt="" />													</div>
							</div>
							<div className="elementor-element elementor-element-f581dd3 elementor-widget elementor-widget-image" data-id="f581dd3" data-element_type="widget" data-widget_type="image.default">
								<div className="elementor-widget-container">
													<img decoding="async" width="117" height="22" src="https://trac.network/wp-content/uploads/2023/12/RectanglePlaceholder.png" className="attachment-large size-large wp-image-79" alt="" />													</div>
							</div>
							<div className="elementor-element elementor-element-3421730 elementor-widget elementor-widget-image" data-id="3421730" data-element_type="widget" data-widget_type="image.default">
								<div className="elementor-widget-container">
													<img decoding="async" width="117" height="22" src="https://trac.network/wp-content/uploads/2023/12/RectanglePlaceholder.png" className="attachment-large size-large wp-image-79" alt="" />													</div>
							</div>
							<div className="elementor-element elementor-element-64cbded elementor-widget elementor-widget-image" data-id="64cbded" data-element_type="widget" data-widget_type="image.default">
								<div className="elementor-widget-container">
													<img decoding="async" width="117" height="22" src="https://trac.network/wp-content/uploads/2023/12/RectanglePlaceholder.png" className="attachment-large size-large wp-image-79" alt="" />													</div>
							</div>
							<div className="elementor-element elementor-element-665be7d elementor-widget elementor-widget-image" data-id="665be7d" data-element_type="widget" data-widget_type="image.default">
								<div className="elementor-widget-container">
													<img decoding="async" width="117" height="22" src="https://trac.network/wp-content/uploads/2023/12/RectanglePlaceholder.png" className="attachment-large size-large wp-image-79" alt="" />													</div>
							</div>
							<div className="elementor-element elementor-element-14d7b1c elementor-widget elementor-widget-image" data-id="14d7b1c" data-element_type="widget" data-widget_type="image.default">
								<div className="elementor-widget-container">
													<img decoding="async" width="117" height="22" src="https://trac.network/wp-content/uploads/2023/12/RectanglePlaceholder.png" className="attachment-large size-large wp-image-79" alt="" />													</div>
							</div>
							<div className="elementor-element elementor-element-737b2c3 elementor-widget elementor-widget-image" data-id="737b2c3" data-element_type="widget" data-widget_type="image.default">
								<div className="elementor-widget-container">
													<img decoding="async" width="117" height="22" src="https://trac.network/wp-content/uploads/2023/12/RectanglePlaceholder.png" className="attachment-large size-large wp-image-79" alt="" />													</div>
							</div>
						</div>
					</div>
				</div>
				<div className="elementor-element elementor-element-a1ca4fa e-flex e-con-boxed e-con e-parent" data-id="a1ca4fa" data-element_type="container">
					<div className="e-con-inner">
						<div className="elementor-element elementor-element-4abddd6 elementor-widget__width-initial elementor-widget elementor-widget-html" data-id="4abddd6" data-element_type="widget" data-widget_type="html.default">
							<div className="elementor-widget-container">
  								<span className="EcosystemText">Our Mission</span>
							</div>
						</div>
						<div className="elementor-element elementor-element-57d7504 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="57d7504" data-element_type="widget" data-widget_type="divider.default">
							<div className="elementor-widget-container">
								<div className="elementor-divider">
									<span className="elementor-divider-separator">
									</span>
								</div>
							</div>
						</div>
						<div className="elementor-element elementor-element-e43369c topGradient elementor-widget elementor-widget-heading" data-id="e43369c" data-element_type="widget" data-widget_type="heading.default">
							<div className="elementor-widget-container">
								<h3 className="elementor-heading-title elementor-size-default">Trac aims to enable decentralized tracking of Ordinals metaprotocols.
									Currently, the existing trackers for metaprotocols are heavily centralized, which goes against the decentralized nature of cryptocurrencies like Bitcoin.
									Trac solves this problem by providing a decentralized network that allows anyone to connect, utilize, and earn from it.</h3>		
							</div>
						</div>
					<div className="elementor-element elementor-element-bd7b305 e-flex e-con-boxed e-con e-child" data-id="bd7b305" data-element_type="container">
						<div className="e-con-inner">
							<div className="elementor-element elementor-element-9de7b35 counterGradient elementor-widget elementor-widget-counter" data-id="9de7b35" data-element_type="widget" data-widget_type="counter.default">
								<div className="elementor-widget-container">
									<div className="elementor-counter">
										<div className="elementor-counter-number-wrapper">
											<span className="elementor-counter-number-prefix"></span>
											<span className="elementor-counter-number" data-duration="2000" data-to-value="100" data-from-value="55" data-delimiter=",">{currentValue}</span>
											<span className="elementor-counter-number-suffix">M+</span>
										</div>
									</div>
								</div>
							</div>
							{!showModal && (
							<div className="elementor-element elementor-element-852155f elementor-widget elementor-widget-heading" data-id="852155f" data-element_type="widget" data-widget_type="heading.default">
								<div className="elementor-widget-container">
									<span className="elementor-heading-title elementor-size-default">transactions tracked by Trac</span>		
								</div>
							</div>
							)}
							{!showModal && (
							<div className="elementor-element elementor-element-eb8508f elementor-mobile-align-left elementor-widget elementor-widget-button" data-id="eb8508f" data-element_type="widget" data-widget_type="button.default">
								<div className="elementor-widget-container">
									<div className="elementor-button-wrapper">
										<a className="elementor-button elementor-button-link elementor-size-xs elementor-animation-shrink" href="https://discord.gg/trac" target="_blank">
											<span className="elementor-button-content-wrapper">
												<span className="elementor-button-icon">
													<svg aria-hidden="true" className="e-font-icon-svg e-fas-external-link-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>			
												</span>
												<span className="elementor-button-text">SEE WHY</span>
											</span>
										</a>
									</div>
								</div>
							</div>
							)}
							
						</div>
					</div>
				</div>
			</div>
			<div className="elementor-element elementor-element-1fa8008 e-flex e-con-boxed e-con e-parent" data-id="1fa8008" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
				<div className="e-con-inner">
					<div className="elementor-element elementor-element-3d87f42 elementor-widget__width-initial elementor-widget elementor-widget-html" data-id="3d87f42" data-element_type="widget" data-widget_type="html.default">
						<div className="elementor-widget-container">
  							<span className="EcosystemText">Ecosystem</span>
						</div>
					</div>
					<div className="elementor-element elementor-element-335e4c2 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="335e4c2" data-element_type="widget" data-widget_type="divider.default">
						<div className="elementor-widget-container">
							<div className="elementor-divider">
								<span className="elementor-divider-separator">
								</span>
							</div>
						</div>
					</div>
					<div className="elementor-element elementor-element-173b223 e-con-full elementor-hidden-mobile e-flex e-con e-child" data-id="173b223" data-element_type="container">
						<div className="elementor-element elementor-element-bd6c253 elementor-widget elementor-widget-image" data-id="bd6c253" data-element_type="widget" data-widget_type="image.default">
							<div className="elementor-widget-container">
													<img decoding="async" src="https://trac.network/assets/TracEcosystemTop.svg" title="" alt="" loading="lazy" />													</div>
							</div>
							<div className="elementor-element elementor-element-7d46d3a e-con-full e-flex e-con e-child" data-id="7d46d3a" data-element_type="container">
								<div className="elementor-element elementor-element-2b15b1d e-flex e-con-boxed e-con e-child" data-id="2b15b1d" data-element_type="container">
									<div className="e-con-inner">
										<div className="elementor-element elementor-element-f4928f4 elementor-widget elementor-widget-image" data-id="f4928f4" data-element_type="widget" data-widget_type="image.default">
											<div className="elementor-widget-container">
												<a href="https://trac.network/trac-core/">
													<img decoding="async" src="https://trac.network/assets/TracCoreLogoEcosystem.svg" title="" alt="" loading="lazy" />								
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="elementor-element elementor-element-9c287a8 e-flex e-con-boxed e-con e-child" data-id="9c287a8" data-element_type="container">
									<div className="e-con-inner">
										<div className="elementor-element elementor-element-f03fcd3 elementor-widget elementor-widget-image" data-id="f03fcd3" data-element_type="widget" data-widget_type="image.default">
											<div className="elementor-widget-container">
												<a href="https://trac.network/tap/">
													<img decoding="async" src="https://trac.network/assets/TAPLogoEcosystem.svg" title="" alt="" loading="lazy" />								
												</a>
											</div>
										</div>
									</div>
								</div>
								<div className="elementor-element elementor-element-fd6c7f2 e-flex e-con-boxed e-con e-child" data-id="fd6c7f2" data-element_type="container">
									<div className="e-con-inner">
										<div className="elementor-element elementor-element-073d681 elementor-widget elementor-widget-image" data-id="073d681" data-element_type="widget" data-widget_type="image.default">
											<div className="elementor-widget-container">
												<a href="https://trac.network/pipe/">
													<img decoding="async" src="https://trac.network/assets/PIPELogoEcosystem.svg" title="" alt="" loading="lazy" />								
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="elementor-element elementor-element-87d062f elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-image" data-id="87d062f" data-element_type="widget" data-widget_type="image.default">
							<div className="elementor-widget-container">
								<a href="https://trac.network/trac-core/">
									<img decoding="async" src="https://trac.network/assets/TracCoreLogoEcosystem.svg" title="" alt="" loading="lazy" />								
								</a>
							</div>
						</div>
						<div className="elementor-element elementor-element-d83e3cb elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-image" data-id="d83e3cb" data-element_type="widget" data-widget_type="image.default">
							<div className="elementor-widget-container">
								<a href="https://trac.network/tap/">
									<img decoding="async" src="https://trac.network/assets/TAPLogoEcosystem.svg" title="" alt="" loading="lazy" />								
								</a>
							</div>
						</div>
						<div className="elementor-element elementor-element-55f62a1 elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-image" data-id="55f62a1" data-element_type="widget" data-widget_type="image.default">
							<div className="elementor-widget-container">
								<a href="https://trac.network/pipe/">
									<img decoding="async" src="https://trac.network/sassets/PIPELogoEcosystem.svg" title="" alt="" loading="lazy" />								
								</a>
							</div>
						</div>
						<div className="elementor-element elementor-element-55d06db elementor-widget elementor-widget-heading" data-id="55d06db" data-element_type="widget" data-widget_type="heading.default">
							<div className="elementor-widget-container">
								<h2 className="elementor-heading-title elementor-size-default">Trac Systems specializes in Blockchain technology, 
									creating innovative products like Trac Core, Tap Protocol, and Pipe
								</h2>		
							</div>
						</div>
						<div className="elementor-element elementor-element-7d4644f elementor-align-center elementor-widget elementor-widget-button" data-id="7d4644f" data-element_type="widget" data-widget_type="button.default">
							<div className="elementor-widget-container">
								<div className="elementor-button-wrapper">
									<a className="elementor-button elementor-button-link elementor-size-xs elementor-animation-shrink" href="https://medium.com/trac-systems/trac-ecosystem-ff99787585d4" target="_blank">
										<span className="elementor-button-content-wrapper">
											<span className="elementor-button-icon">
												<svg aria-hidden="true" className="e-font-icon-svg e-fas-external-link-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>			
											</span>
											<span className="elementor-button-text">SEE HOW IT WORKS</span>
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			<div className="elementor-element elementor-element-20dc33e elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-parent" data-id="20dc33e" data-element_type="container">
				{/* <div className="e-con-inner">
					<div className="elementor-element elementor-element-11e1795 elementor-widget elementor-widget-heading" data-id="11e1795" data-element_type="widget" data-widget_type="heading.default">
						<div className="elementor-widget-container">
							<span className="elementor-heading-title elementor-size-default">We and the community are always in the loop</span>		
						</div>
					</div>
					<div className="elementor-element elementor-element-babf62c whitePinkGradient elementor-widget elementor-widget-heading" data-id="babf62c" data-element_type="widget" data-widget_type="heading.default">
						<div className="elementor-widget-container">
							<h3 className="elementor-heading-title elementor-size-default">Stay in track!</h3>		
						</div>
					</div>
					<div className="elementor-element elementor-element-e1ff0ca e-con-full e-flex e-con e-child" data-id="e1ff0ca" data-element_type="container">
						<div className="elementor-element elementor-element-e8eb0cb e-con-full e-flex e-con e-child" data-id="e8eb0cb" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
							<div className="elementor-element elementor-element-8d1bef9 elementor-widget__width-initial elementor-widget-mobile__width-auto elementor-widget elementor-widget-html" data-id="8d1bef9" data-element_type="widget" data-widget_type="html.default">
								<div className="elementor-widget-container">
  									<span className="networkText">Network Activity</span>
								</div>
							</div>
							<div className="elementor-element elementor-element-5e0fa14 animated-fast elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-html" data-id="5e0fa14" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="html.default">
								<div className="elementor-widget-container">
			
									<div className="network-activity-container">
									</div>
								</div>
							</div>
							<div className="elementor-element elementor-element-21799d6 elementor-align-right elementor-mobile-align-center elementor-widget elementor-widget-button" data-id="21799d6" data-element_type="widget" data-widget_type="button.default">
							<div className="elementor-widget-container">
								<div className="elementor-button-wrapper">
									<a className="elementor-button elementor-button-link elementor-size-xs elementor-animation-shrink" href="https://trac.network" target="_blank">
										<span className="elementor-button-content-wrapper">
											<span className="elementor-button-icon">
												<svg aria-hidden="true" className="e-font-icon-svg e-fas-external-link-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>			
											</span>
											<span className="elementor-button-text">SEE MORE</span>
										</span>
									</a>
								</div>
							</div>
						</div>
						<div className="elementor-element elementor-element-c991055 e-con-full e-flex e-con e-child" data-id="c991055" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
							<div className="elementor-element elementor-element-a1b6c41 elementor-widget elementor-widget-eael-twitter-feed" data-id="a1b6c41" data-element_type="widget" data-widget_type="eael-twitter-feed.default">
								<div className="elementor-widget-container">
        							<div>
           								 <div className="eael-twitter-feed eael-twitter-feed-a1b6c41 eael-twitter-feed-masonry eael-twitter-feed-col-3 clearfix" data-gutter="10" data-posts-per-page="" data-total-posts="10" data-nomore-item-text="" data-next-page="2" >
                            			</div>
            							<div className="clearfix">
                            			</div>
        							</div>
        						</div>
							</div>
						</div>
					</div>
				</div> */}
			{/* </div> */}
			<div className="elementor-element elementor-element-3053606 e-con-full e-flex e-con e-parent" data-id="3053606" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
				<div className="elementor-element elementor-element-4308bcf e-flex e-con-boxed e-con e-child" data-id="4308bcf" data-element_type="container">
					<div className="e-con-inner">
						<div className="elementor-element elementor-element-57d12a4 e-flex e-con-boxed e-con e-child" data-id="57d12a4" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
							<div className="e-con-inner">
								<div className="elementor-element elementor-element-27bf9c6 e-con-full e-flex e-con e-child" data-id="27bf9c6" data-element_type="container">
									<div className="elementor-element elementor-element-7068360 elementor-widget elementor-widget-image" data-id="7068360" data-element_type="widget" data-widget_type="image.default">
										<div className="elementor-widget-container">
											<img decoding="async" src="https://trac.network/assets/TRAC_SYS_LOGO.svg" title="" alt="" loading="lazy" />													
										</div>
									</div>
								</div>
								<div className="elementor-element elementor-element-875c5ba e-con-full elementor-hidden-tablet elementor-hidden-mobile elementor-hidden-desktop e-flex e-con e-child" data-id="875c5ba" data-element_type="container">
									<div className="elementor-element elementor-element-0825f9f elementor-widget__width-inherit elementor-widget elementor-widget-html" data-id="0825f9f" data-element_type="widget" data-widget_type="html.default">
										<div className="elementor-widget-container">
  											<span className="footerTitleGrey">Developers</span>
										</div>
									</div>
									<div className="elementor-element elementor-element-33f4177 elementor-widget__width-initial elementor-widget elementor-widget-html" data-id="33f4177" data-element_type="widget" data-widget_type="html.default">
										<div className="elementor-widget-container">
  											<span className="footerTextGrey">Documentation</span>
										</div>
									</div>
									<div className="elementor-element elementor-element-2457743 elementor-widget__width-initial elementor-widget elementor-widget-html" data-id="2457743" data-element_type="widget" data-widget_type="html.default">
										<div className="elementor-widget-container">
											<span className="footerTextGrey">Endpoints</span>
										</div>
									</div>
									<div className="elementor-element elementor-element-2f95d47 elementor-widget__width-initial elementor-widget elementor-widget-html" data-id="2f95d47" data-element_type="widget" data-widget_type="html.default">
										<div className="elementor-widget-container">
  											<span className="footerTextGrey">API Reference</span>
										</div>
									</div>
									<div className="elementor-element elementor-element-fda04de elementor-widget__width-initial elementor-widget elementor-widget-html" data-id="fda04de" data-element_type="widget" data-widget_type="html.default">
										<div className="elementor-widget-container">
  											<span className="footerTextGrey">How to use Trac</span>
										</div>
									</div>
									<div className="elementor-element elementor-element-249d03e elementor-widget__width-initial elementor-widget elementor-widget-html" data-id="249d03e" data-element_type="widget" data-widget_type="html.default">
										<div className="elementor-widget-container">
  											<span className="footerTextGrey">Developer Discord</span>
										</div>
									</div>
								</div>
								<div className="elementor-element elementor-element-e6033c7 e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child" data-id="e6033c7" data-element_type="container">
									<div className="elementor-element elementor-element-19efedb elementor-widget__width-inherit elementor-widget elementor-widget-html" data-id="19efedb" data-element_type="widget" data-widget_type="html.default">
										<div className="elementor-widget-container">
  											<span className="footerTitleWhite">Ecosystem</span>
										</div>
									</div>
									<div className="elementor-element elementor-element-f333701 elementor-widget__width-initial elementor-widget elementor-widget-html" data-id="f333701" data-element_type="widget" data-widget_type="html.default">
										<div className="elementor-widget-container">
											<a href="/tap">
  												<span  className="footerTextWhite">TAP</span>
											</a>
										</div>
									</div>
									<div className="elementor-element elementor-element-900c94f elementor-widget__width-initial elementor-widget elementor-widget-html" data-id="900c94f" data-element_type="widget" data-widget_type="html.default">
										<div className="elementor-widget-container">
											<a href="/Pipe">
  												<span className="footerTextWhite">PIPE</span>
											</a>
										</div>
									</div>
									<div className="elementor-element elementor-element-6de3b01 elementor-widget__width-initial elementor-widget elementor-widget-html" data-id="6de3b01" data-element_type="widget" data-widget_type="html.default">
										<div className="elementor-widget-container">
											<a href="/trac-core">
  												<span className="footerTextWhite">Trac Core</span>
											</a>
										</div>
									</div>
									<div className="elementor-element elementor-element-c6ecf47 elementor-widget__width-initial elementor-widget elementor-widget-html" data-id="c6ecf47" data-element_type="widget" data-widget_type="html.default">
										<div className="elementor-widget-container">
											<a href="https://legacy.trac.network/tap.html" target="_blank">
  												<span className="footerTextWhite">Tracker</span>
											</a>
										</div>
									</div>
								</div>
								<div className="elementor-element elementor-element-2f63b30 e-con-full elementor-hidden-tablet elementor-hidden-mobile elementor-hidden-desktop e-flex e-con e-child" data-id="2f63b30" data-element_type="container">
									<div className="elementor-element elementor-element-006765d elementor-widget__width-inherit elementor-widget elementor-widget-html" data-id="006765d" data-element_type="widget" data-widget_type="html.default">
										<div className="elementor-widget-container">
										  <span className="footerTitleGrey">Resources</span>
										</div>
									</div>
									<div className="elementor-element elementor-element-aa9f4f0 elementor-widget__width-initial elementor-widget elementor-widget-html" data-id="aa9f4f0" data-element_type="widget" data-widget_type="html.default">
										<div className="elementor-widget-container">
											<span className="footerTextGrey">Whitepaper</span>

										</div>
									</div>
									<div className="elementor-element elementor-element-4b046dc elementor-widget__width-initial elementor-widget elementor-widget-html" data-id="4b046dc" data-element_type="widget" data-widget_type="html.default">
										<div className="elementor-widget-container">
										  <span className="footerTextGrey">Media Kit</span>
										</div>
									</div>	
								</div>
								<div className="elementor-element elementor-element-cd72465 e-con-full e-flex e-con e-child" data-id="cd72465" data-element_type="container">
										<div className="elementor-element elementor-element-e369c2c elementor-widget__width-auto elementor-widget-mobile__width-inherit elementor-invisible elementor-widget elementor-widget-pix-social-icons" data-id="e369c2c" data-element_type="widget" data-widget_type="pix-social-icons.default">
											<div className="elementor-widget-container">
												<div className="text-white text-center pix-social-icons font-weight-bold d-inline-block w-100 " style={{fontSize:'50px'}}>
													<a  href="https://twitter.com/trac_btc" aria-label="pixicon-x-twitter" className="text-white animate-in d-inline-block 1  px-2" data-anim-type="fade-in-up" data-anim-delay="200"> <i className="bi bi-twitter-x"></i></a>
													<a  href="https://discord.com/invite/trac" aria-label="pixicon-discord" className="text-white animate-in d-inline-block 1  px-2" data-anim-type="fade-in-up" data-anim-delay="300">
														<svg fill="#FFFFFF" width="53px" height="41px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Discord icon</title><path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z"/></svg> 

													 </a>
													<a  href="https://t.me/tap_protocol" aria-label="pixicon-telegram2" className="text-white animate-in d-inline-block 1  px-2" data-anim-type="fade-in-up" data-anim-delay="400"> <FontAwesomeIcon icon={faTelegram} className="twitter-icon" /></a>
													<a  href="https://github.com/BennyTheDev" aria-label="pixicon-github2" className="text-white animate-in d-inline-block 1  px-2" data-anim-type="fade-in-up" data-anim-delay="500"> <FontAwesomeIcon icon={faGithub} className="twitter-icon" /></a>
												</div>
											</div>
										</div>
										<div className="elementor-element elementor-element-0518bc5 elementor-align-right elementor-widget elementor-widget-button" data-id="0518bc5" data-element_type="widget" data-widget_type="button.default">
											<div className="elementor-widget-container">
												<div className="elementor-button-wrapper">
													<a className="elementor-button elementor-button-link elementor-size-xs elementor-animation-shrink" href="https://discord.gg/trac" target="_blank">
														<span className="elementor-button-content-wrapper">
															<span className="elementor-button-icon">
																<svg aria-hidden="true" className="e-font-icon-svg e-fas-external-link-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path></svg>			
															</span>
															<span className="elementor-button-text">SEE MORE</span>
														</span>
													</a>
												</div>
											</div>
										</div>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="elementor-element elementor-element-e083c37 e-flex e-con-boxed e-con e-parent" data-id="e083c37" data-element_type="container">
				<div className="e-con-inner">
					<div className="elementor-element elementor-element-1a5936e elementor-widget elementor-widget-html" data-id="1a5936e" data-element_type="widget" data-widget_type="html.default">
						<div className="elementor-widget-container">
  							<span className="footerCopyright">TRAC SYSTEMS © 2024. All rights reserved.</span>
						</div>
					</div>
				</div>
			</div>
		</div>
			
		<footer id="pix-page-footer" className="site-footer2  bg-white my-0 py-0" data-sticky-bg="" data-sticky-color="">
			<div className="container my-0 py-0">
			</div>
		</footer>
		<svg className="shape-overlays d-none" viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="search-overlay-color-1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%"   stop-color="#7d8dff"/><stop offset="100%"   stop-color="#ff4f81"/></linearGradient><linearGradient id="search-overlay-color-2" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%"   stop-color="#ff4f81"/><stop offset="100%"   stop-color="#ff4f81"/></linearGradient><linearGradient id="search-overlay-color-3" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%"   stop-color="#7d8dff"/><stop offset="100%"   stop-color="#7d8dff"/></linearGradient><linearGradient id="search-overlay-color-4" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%"   stop-color="#7d8dff"/><stop offset="100%"   stop-color="#ff4f81"/></linearGradient></defs><path className="shape-overlays__path" d="" fill="url(#search-overlay-color-3)"></path><path className="shape-overlays__path" d="" fill="url(#search-overlay-color-2)"></path><path className="shape-overlays__path" d="" fill="url(#search-overlay-color-1)"></path>
		</svg>		
		<div className="pix-overlay d-none">
			<div className="">
				<div className="pix-search ">
					<div className="container">
						<div className="row d-flex justify-content-center">
							<div className="col-12 col-md-12">
								<div className="pix-overlay-item pix-overlay-item--style-6">
									<a href="#" className="pix-search-close"><span className="screen-reader-text sr-only">Close</span><i className="text-white pixicon-close-circle"></i></a>
									<div className="pb-0">
										<div className="search-title h1 heading-font display-2 text-gradient-primary2 text-white font-weight-bold">Search
										</div>
									</div>
								</div>
								<div className="slide-in-container pb-2 pix-overlay-item pix-overlay-item--style-6"><p className="text-gray-3s text-20 mb-2 secondary-font search-note text-light-opacity-5">Hit enter to search or ESC to close</p>
								</div>
								<div className="search-bar pix-overlay-item pix-overlay-item--style-6">
									<div className="search-content">
										<form className="pix-search-form" method="get" action="https://trac.network/">
											<div className="media pix-ajax-search-container">
												<button className="pix-search-submit align-self-center" aria-label="search" type="submit"><i className="pixicon-search"></i></button>
												<div className="media-body">
													<label className="w-100 m-0">
														<span className="screen-reader-text sr-only">Search for:</span>
														<input value="" name="s" id="s" className="pix-search-input pix-ajax-search" type="search"  placeholder="Search" data-search-link="https://trac.network/wp-admin/admin-ajax.php?action=pix_ajax_searcht&#038;nonce=e9e98ed930" />
													</label>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{!showModal && (
		<a href="#" className="shadow shadow-hover rounded-circle bg-gray-2 back_to_top default" title="Go to top"> <i className="bi bi-chevron-up"></i>
			</a>
		)}
		
		<div className="pix-cookie-banner position-fixed">
		
			<div className="pix-cookie-inner pix-px-10 pix-py-5 rounded-xl shadow-lg pix-mb-20 bg-white fly-sm shadow-hover-lg animate-in" data-anim-type="fade-in-up" data-anim-delay="1000">
				
			{!showModal && (
			<div className="d-sm-flex align-items-center">
					<img className="pix-cookie-img mr-1 mr-sm-2" width="30" height="30" src="https://trac.network/wp-content/themes/essentials/inc/images/cookie.png" alt="cookie" />
						<span className="text-body-default font-weight-bold text-sm">
							By using this website, you agree to our				
							<a target="_blank" href="" className="ml-12 text-heading-default font-weight-bold text-sm " data-popup-link="" data-popup-id="">
								cookie policy.				
							</a>
						</span>
						<a href="#" data-link="https://trac.network/wp-admin/admin-ajax.php?action=pix_close_cookies&#038;nonce=5813e0d660" className="pix-cookies-close text-20 line-height-0 ml-2 d-inline-block text-gray-4"><span className="screen-reader-text sr-only">Close</span><i className="align-self-center pixicon-close-circle"></i>
						</a>
					</div>
					)}
				</div>
				
			</div>
			
			<div className="d-flex">
				<svg width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg">
      				<defs>
        				<linearGradient id="svg-gradient-primary">
							<stop offset="0%" stop-color="#7d8dff" />
							<stop offset="100%" stop-color="#ff4f81" />
        				</linearGradient>
      				</defs>
    			</svg>
			</div>
			
			</div>
		</div>
			
		
		
	);
}
