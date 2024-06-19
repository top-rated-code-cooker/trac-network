import "./mainframe.css";

interface  MainFrameProps {
	isConnected: boolean;
	htmlContent: string;
	OnSendAsset: () => void;
	OnClickConnectButton: () => void;
}

export default function MainFrame( {} : MainFrameProps) {
	// let htmlItem: any = {};

	// try {
	// 	htmlItem = JSON.parse(atob(htmlContent));
	// } catch (error) {
	// }
	
	return (
		<div className="bg-[#0f0f0f]">
			<section className="flex justify-center flex-col mt-[50px]">
				<div className="flex justify-center">
					<div className="flex flex-col w-[1400px] mt-[157px]">
						<div className="flex justify-center w-100">
							<h1 className="text-[100px] leading-[90px] pb-3 font-gradient1  bg-clip-text text-transparent font-custom">
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
						<div className="flex flex-col mt-[50px] gap-5">
							<span className="text-white text-[14px] tracking-[1px]">
								Our Mission
							</span>
							<div className="pt-[15px] pb-[15px]">
								<hr>
								</hr>
							</div>
							<h3 className="text-[48px] font-medium whitespace-pre-wrap leading-[52px] font-gradient1  bg-clip-text text-transparent font-darker">
								Trac aims to enable decentralized tracking of Ordinals metaprotocols.
								Currently, the existing trackers for metaprotocols are heavily centralized, which goes against the decentralized nature of cryptocurrencies like Bitcoin.
								Trac solves this problem by providing a decentralized network that allows anyone to connect, utilize, and earn from it.
							</h3>
						</div>
						<div className="flex justify-center">
							<div className="w-[1200px]">
								<h3 className="text-[400px] font-medium tracking-[-15px] leading-none bg-gradient-to-b from-[#F7931A] via-[#FF7DBD_69.73%] to-[#E51C89] bg-clip-text text-transparent font-familjen">
									100M+
								</h3>
								<h4 className="text-[#E51C89] text-[48px] font-medium font-darker ml-[25px]">
									transactions tracked by Trac
								</h4>
							</div>
						</div>
					</div>
				</div>
				
			</section>
			<div className="bg-[url('/GridBackground.svg')] flex justify-center">
				<div className="flex justify-center flex-col">
					<div className="ml-[100px] mt-[20px] w-[1200px]">
						<a className="text-[12px] flex bg-[#E51C89] border-[1px] rounded-[4px] px-4 py-2 border-solid border-[#E51C89] justify-center items-center cursor-pointer w-[120px]">
							<span className="ml-[10px] text-[12px] mr-2">
								<svg aria-hidden="true" className="w-3 h-3 e-font-icon-svg e-fas-external-link-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="white">
									<path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z">
									</path>
								</svg>
							</span>
							<span>SEE WHY</span>
						</a>
					</div>
					<div className="flex flex-col gap-5 pt-[150px] pb-[100px]">
						<span className="text-white text-[14px] tracking-[1px]">
							Ecosystem
						</span>
						<div className="pt-[15px] pb-[15px]">
							<hr>
							</hr>
						</div>
						<div className="flex justify-center">
							<img src="/TracEcosystemTop.svg">

							</img>
						</div>
						<div className="flex justify-center mb-[50px tracking-[-0.01em]]">
							<div className="flex justify-center flex-grow">
								<a href = "https://trac.network/trac-core/">
									<img src="/TracCoreLogoEcosystem.svg" className="w-[250px]"/>
								</a>
							</div>
							<div className="flex justify-center flex-grow">
								<a href = "https://trac.network/tap/">
									<img src="/TAPLogoEcosystem.svg" className="w-[250px]"/>
								</a>
							</div>
							<div className="flex justify-center flex-grow">
								<a href = "https://trac.network/pipe/">
									<img src="/PIPELogoEcosystem.svg" className="w-[250px]"/>
								</a>
							</div>
						</div>	
						<div className="flex justify-center flex-col">
							<h2 className="text-[#FFABD4] text-[48px] leading-[52px] font-darker text-center">
								Trac Systems specializes in Blockchain technology,
								<br/>
								creating innovative products like Trac Core, Tap Protocol, and Pipe 
							</h2>
							
						</div>
						<div className="flex justify-center">
							<a className="text-[12px] flex bg-[#E51C89] border-[1px] rounded-[4px] px-4 py-2 border-solid border-[#E51C89] justify-center items-center cursor-pointer w-[187px]">
								<span className="ml-[10px] text-[12px] mr-2">
									<svg aria-hidden="true" className="w-3 h-3 e-font-icon-svg e-fas-external-link-alt" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="white">
										<path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z">
										</path>
									</svg>
								</span>
								<span>SEE HOW IT WORKS</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
