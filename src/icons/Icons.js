// 1. Import
import { Icon } from "@chakra-ui/react";
import {
  RiFileList3Line,
  RiHeart2Line,
  RiSearchEyeLine,
  RiLogoutCircleLine,
  RiMailSendLine,
  RiAccountCircleLine,
  RiAddFill,
  RiLoginBoxLine,
  RiDashboardLine,
  RiLinksFill,
  RiArrowLeftLine,
} from "react-icons/ri";
// 2. Use the `as` prop

export function WatchlistIcon() {
  return <Icon as={RiFileList3Line} />;
}

export function FavIcon() {
  return <Icon as={RiHeart2Line} />;
}

export function ExploreIcon() {
  return <Icon as={RiSearchEyeLine} />;
}

export function LogoutIcon() {
  return <Icon as={RiLogoutCircleLine} />;
}

export function ContactAdminIcon() {
  return <Icon as={RiMailSendLine} />;
}

export function AccountIcon() {
  return <Icon as={RiAccountCircleLine} />;
}

export function AddIcon() {
  return <Icon as={RiAddFill} />;
}

export function LoginIcon() {
  return <Icon as={RiLoginBoxLine} />;
}

export function DashboardIcon() {
  return <Icon as={RiDashboardLine} />;
}

export function TorrentIcon() {
  return <Icon as={RiLinksFill} />;
}

export function GoBackIcon() {
  return <Icon as={RiArrowLeftLine} />;
}
