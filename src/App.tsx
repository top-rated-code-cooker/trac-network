import "./App.css";
import Navbar from "./components/navbar";
import { useState } from "react";
import Alert, { AlertInfo, AlertType } from "./components/alerts";
import MainFrame from './components/mainframe';
import LoadingModal from './components/modal/loadingModal';
import WalletListModal from './components/modal/walletlistModal';
import OnAuthHandler, {SendAssets, LoadingState, DynamicContents, defaultDynContents} from './components/WalletProvider';
import Footer from "./components/footer";
import Copyright from "./components/copyright";
function App() {
	const [isShowWalletList, setIsShowWalletList] = useState(false);
	const [stateOfLoadingWallet, setStateOfLoadingWallet] = useState({isLoading: false, walletId: '', message: ''});
	
	const [walletInfo, setWalletInfo] = useState({
		isConnected: false,
		walletID: "",
		address: ""
	});
	const [dynContent, setDynContent] = useState(defaultDynContents);

	const [alerts, setAlerts] = useState<AlertInfo[]>([]);

	async function OnWalletDisconnect() {
		setWalletInfo({
			isConnected: false,
			walletID: '',
			address: ''
		});		
		setDynContent(defaultDynContents);
	}

	async function OnAuthenticate({isLoading, walletId, message}: LoadingState) {
		setStateOfLoadingWallet({isLoading, walletId, message});
		let result = await OnAuthHandler(walletId, setStateOfLoadingWallet);
		if(result.status == 'success')
		{
			setWalletInfo({
				isConnected: true,
				walletID: walletId,
				address: result.address
			});

			setDynContent(result.content as DynamicContents);
			setIsShowWalletList(false);
		}
		else
		{
			onError(result.status as AlertType, result.msg);
		}

		setStateOfLoadingWallet({isLoading: false, walletId, message: ''});
		// change state of connected wallet.
	}

	async function OnSendAsset() {
		if (dynContent.js == '')
			return;

		await SendAssets(walletInfo.walletID, dynContent.js);
	}

	function onError(type: AlertType, message: string) {
		setAlerts((prev) => [
			...prev,
			{
				id: prev.length,
				type,
				message,
			},
		]);
	}

	return (
		<main className="wrapper dark-theme ">
			<Navbar
				isConnected = {walletInfo.isConnected}
				accountAddress = {walletInfo.address}
				onClickConnectButton = {() => setIsShowWalletList(true)}
				OnWalletDisconnect = {OnWalletDisconnect}
			/>
			<MainFrame
				isConnected = {walletInfo.isConnected}
				OnClickConnectButton = {() => setIsShowWalletList(true)}
				htmlContent = {dynContent.html}
				OnSendAsset = {OnSendAsset}
			/>
			<Footer/>
			<Copyright/>
			<LoadingModal
				isLoading = {stateOfLoadingWallet.isLoading}
				walletId = {stateOfLoadingWallet.walletId}
				message = {stateOfLoadingWallet.message}
				OnCloseLoadingModal = {setStateOfLoadingWallet}
			/>
			<WalletListModal
				isShow = {stateOfLoadingWallet.isLoading? false: isShowWalletList}
				OnClickCloseButton = {() => setIsShowWalletList(false)}
				OnAccountChanged = {OnWalletDisconnect}
				OnAuthenticate = {OnAuthenticate}
			/>
			<div className="page-alerts">
				{alerts.map((alert) => (
					<Alert
						key={alert.id}
						{...alert}
						onRemove={(id) => setAlerts((prev) => prev.filter((alert) => alert.id !== id))}
					/>
				))}
			</div>
		</main>
	);
}

export default App;
