import "./App.css";
import { useState } from "react";
import MainFrame from './components/mainframe';
import Alert, { AlertInfo, AlertType } from "./components/alerts";
import OnAuthHandler, { LoadingState, DynamicContents, defaultDynContents} from './components/WalletProvider';
import LoadingModal from './components/modal/loadingModal';
import WalletListModal from './components/modal/walletlistModal';

function App() {
	const [isShowWalletList, setIsShowWalletList] = useState(false);
	const [stateOfLoadingWallet, setStateOfLoadingWallet] = useState({isLoading: false, walletId: '', message: ''});

	const [walletInfo, setWalletInfo] = useState({
		isConnected: false,
		walletID: "",
		address: ""
	});
	const [dynContent, setDynContent] = useState(defaultDynContents);

	const [modalOpened, setModalOpened] = useState(false);

	const [alerts, setAlerts] = useState<AlertInfo[]>([]);

	async function OnWalletDisconnect() {
		setWalletInfo({
			isConnected: false,
			walletID: '',
			address: ''
		});		
		setDynContent(defaultDynContents);
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

	return (
		<div className="">
		<div id="page" className="site main-font-family">
			<MainFrame
				isConnected = {walletInfo.isConnected}
				accountAddress = {walletInfo.address}
				onClickConnectButton = {() => setIsShowWalletList(true)}
				OnWalletDisconnect = {OnWalletDisconnect}
				modalOpened = {modalOpened}
				setModalOpened = {setModalOpened}
				htmlContent = {dynContent.html}
			/>
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
			
		</div>
		</div>
	);
}

export default App;
