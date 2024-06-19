import {  useRef, useState } from "react";
import logo from "../../assets/images/LOGO.svg";
import { usePopper } from "react-popper";
import "./navbar.css";
import "./responsive.css";

interface NavItemProps {
  text: string;
  to: string;
}

// function NavItem(props: NavItemProps) {
//   return (
//     <a className="nav-item text-decoration-none" href={props.to ?? '#'}>
//       <span className="text">{props.text}</span>
//     </a>
//   );
// }

function MenuItem(props: NavItemProps) {
  return (
    <a className="menu-item">
      <span className="text">{props.text}</span>
    </a>
  );
}

// function GasPopover() {
//   const [visible, setVisible] = useState(false);
//   const referenceElement = useRef(null);
//   const popperElement = useRef(null);
//   const arrowElement = useRef(null);
//   const [feerate, setFeerate] = useState({hourFee: 0, halfHourFee: 0, fastestFee: 0});
//   const { styles, attributes } = usePopper(
//     referenceElement.current,
//     popperElement.current,
//     {
//       modifiers: [
//         { name: "arrow", options: { element: arrowElement.current } },
//       ],
//     }
//   );

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data } = await axios.get(`https://mempool.space/api/v1/fees/recommended`);
//         setFeerate(data);
//       } catch (error) {
//         console.log("Server responded with:", error);
//       }
//     };

//     fetchData(); // fetch data immediately
//     const intervalId = setInterval(fetchData, 5000); // fetch data every 30 seconds

//     // clean up the interval on component unmount
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <>
//       <button
//         className="pill"
//         ref={referenceElement}
//         onMouseEnter={() => setVisible(true)}
//         onMouseLeave={() => setVisible(false)}
//       >
//         <i className="iconfont icon-gas1"></i>
//         <span>{feerate.halfHourFee}</span>
//       </button>
//       <div
//         className={`gas-popover popover ${visible ? "is-visible" : "hidden"}`}
//         style={styles.popper}
//         ref={popperElement}
//         {...attributes.popper}
//       >
//         <div className="arrow" style={styles.arrow} ref={arrowElement}></div>
//         <div className="popover-content">
//           <div className="gas-list">
//             <div className="gas-item">
//               <i className="nav-rate-icon iconfont icon-bike"></i>
//               <span className="nav-rate-text">Low: {feerate.hourFee} sats/vB</span>
//             </div>
//             <div className="gas-item">
//               <i className="nav-rate-icon iconfont icon-plane1"></i>
//               <span className="nav-rate-text">Medium: {feerate.halfHourFee} sats/vB</span>
//             </div>
//             <div className="gas-item">
//               <i className="nav-rate-icon iconfont icon-flashlight-line"></i>
//               <span className="nav-rate-text">High: {feerate.fastestFee} sats/vB</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// interface InfoPopoverProps extends PropsWithChildren {
//   title: string;
// }

// function InfoPopover({ title, children }: InfoPopoverProps) {
//   const [visible, setVisible] = useState(false);
//   const referenceElement = useRef(null);
//   const popperElement = useRef(null);
//   const arrowElement = useRef(null);
//   const { styles, attributes } = usePopper(
//     referenceElement.current,
//     popperElement.current,
//     {
//       modifiers: [
//         { name: "arrow", options: { element: arrowElement.current } },
//       ],
//     }
//   );

//   return (
//     <>
//       <div
//         ref={referenceElement}
//         onMouseEnter={() => setVisible(true)}
//         onMouseLeave={() => setVisible(false)}
//       >
//         {children}
//       </div>
//       <div
//         className={`info-popover popover ${visible ? "is-visible" : "hidden"}`}
//         style={styles.popper}
//         ref={popperElement}
//         {...attributes.popper}
//       >
//         <div className="arrow" style={styles.arrow} ref={arrowElement}></div>
//         <span className="popover-content">{title}</span>
//       </div>
//     </>
//   );
// }

interface ExtraItemProps {
  title: string;
  icon: string;
}

function ExtraItem({ title, icon }: ExtraItemProps) {
  return (
    <div className="additional-item">
      <i className={`iconfont gn-icon-click ${icon}`}></i>
      <span>{title}</span>
    </div>
  );
}

function EllipsisPopover() {
  const [visible, setVisible] = useState(false);
  const referenceElement = useRef(null);
  const popperElement = useRef(null);
  const { styles, attributes } = usePopper(
    referenceElement.current,
    popperElement.current
  );

  function onNightToggle() { }

  return (
    <>
      <button
        className="more-btn font-kdam text-[10px] tracking-[1px]"
        ref={referenceElement}
        onClick={() => setVisible(!visible)}
        onBlur={() => setVisible(false)}
      >
        ECOSYSTEM ▼
      </button>
      <div
        className={`more-popover popover ${visible ? "is-visible" : "hidden"}`}
        style={styles.popper}
        ref={popperElement}
        {...attributes.popper}
      >
        <div className="popover-content">
          <div>
            <div className="night-mode">
              <i className="iconfont gn-icon-click icon-dark"></i>
              <span>Night Mode</span>
              <SwitchButton
                className="toggle"
                onUpdate={onNightToggle}
                defaultVal={true}
              />
            </div>
            <ExtraItem title="About" icon="icon-info-circle-filled" />
            <ExtraItem title="API" icon="icon-soundmian" />
            <ExtraItem title="Twitter" icon="icon-twitter1" />
            <ExtraItem title="Discord" icon="icon-discord-fill" />
            <ExtraItem title="Documentation" icon="icon-book-filled" />
          </div>
        </div>
      </div>
    </>
  );
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

interface SwitchButtonProps {
  className?: string;
  defaultVal?: boolean;
  onUpdate?: (newVal: boolean) => void;
}

interface MenuControlToggleProps extends SwitchButtonProps {
  text: string;
}

function SwitchButton({ className, defaultVal, onUpdate }: SwitchButtonProps) {
  const [value, setValue] = useState(!!defaultVal);

  function handleSwitch() {
    setValue(!value);
    onUpdate?.(!value);
  }

  return (
    <label
      className={`switch ${className} ${value ? "on" : "off"}`}
      onClick={handleSwitch}
    ></label>
  );
}

function MenuControlToggle({ text, onUpdate }: MenuControlToggleProps) {
  return (
    <a className="menu-item">
      <span className="text">{text}</span>
      <SwitchButton onUpdate={onUpdate} />
    </a>
  );
}

interface SideNavProps {
  open: boolean;
}

function SideNav({ open }: SideNavProps) {
  return (
    <aside
      className="sidenav"
      style={{
        display: open ? "" : "none",
      }}
    >
      <div className="wrapper">
        <div className="menu-links">
          <MenuItem text="Discover" to="" />
          <MenuItem text="Portfolio" to="" />
          <MenuItem text="Inscriptions" to="" />
          <MenuItem text="Index" to="" />
          <MenuItem text="Mint" to="" />
          <MenuItem text="Rewards" to="" />
          <MenuItem text="About" to="" />
          <MenuItem text="Documentation" to="" />
        </div>

        <MenuControlToggle text="Dark Mode" />
        <MenuItem text="Install Our App" to="" />
      </div>
    </aside>
  );
}

interface NavbarProps {
  isConnected: boolean;
  accountAddress: string;
  onClickConnectButton: () => void;
  OnWalletDisconnect: () => void;
}

export default function Navbar({
  isConnected,
  accountAddress,
  onClickConnectButton,
  OnWalletDisconnect,
}: NavbarProps) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="flex justify-center">
      <div className="main-nav max-h-[55px] fixed rounded-[7px] w-[1400px] bg-[#272727] bg-opacity-[42] mt-[50px] mb-[50px] border-[1px] border-solid border-[#3A3A3A]">
        
        <div className="nav-links">
          
        </div>

        <div className="w-1/3 flex flex-grow-0 flex-shrink-0 justify-center">
          <img className="" src={logo} />
        </div>

        <div className="w-1/3 justify-end flex flex-row gap-10">
          <div
            className="extra-links flex gap-5"
            style={{
              display: openMenu ? "none" : "",
            }}
          >

            <div className="more-items">
              <EllipsisPopover />
            </div>

            <div className="gift-wrapper-icon-parent font-kdam text-[10px] tracking-[1px]">
              TRACKER
            </div>

          
          </div>

          <div className="nav-end">
            {isConnected ? (
              <div className="address-dropdown">
                <AddressPopover
                  address={accountAddress}
                  disconnectWallet={OnWalletDisconnect}
                />
              </div>
            ) : (
              <button
                className="connect-wallet gn-button gn-button--medium gn-button--primary bg-[#E51C89]"
                onClick={onClickConnectButton}
              >
                <i className="iconfont icon-wallet"></i>
                &nbsp;Connect
              </button>
            )}

            <button className="small-menu" onClick={() => setOpenMenu(!openMenu)}>
              <i
                className="iconfont icon-view-list icon-click"
                style={{
                  display: openMenu ? "none" : "",
                }}
              ></i>
              <i
                className="iconfont icon-close icon-click"
                style={{
                  display: openMenu ? "" : "none",
                }}
              ></i>
            </button>
          </div>

          <SideNav open={openMenu} />
        </div>
      </div>
    </nav>
  );
}
