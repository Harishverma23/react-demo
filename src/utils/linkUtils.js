import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {
	USER_PROFILE_PATH, 
	KNOWLEDGE_MGT_PATH, 
	TOTAL_REWARDS_PATH, 
	CAREER_DEV_PATH,
	POLICIES_PATH, 
	ATTENDANCE_LEAVE_PATH, 
	TRAVEL_PATH,
	TOOL_PROCESS_PATH, 
	JOINER_CORNER_PATH,
	SETTINGS_PATH,
	LOGOUT_PATH,
} from '../constants/routes';

export const topNavPages = [
	{
		label: 'Knowledge Management',
		path: KNOWLEDGE_MGT_PATH,
	},
	{ 
		label: 'Total Rewards',
		path: TOTAL_REWARDS_PATH,
	},
	{ 
		label: 'Career & Development',
		path: CAREER_DEV_PATH,
	},
	{ 
		label: 'Policies',
		path: POLICIES_PATH,
	},
	{ 
		label: 'Attendence & Leave',
		path: ATTENDANCE_LEAVE_PATH,
	},
	{
		label: 'Travel',
		path: TRAVEL_PATH,
	},
	{
		label: 'Tool & Process',
		path: TOOL_PROCESS_PATH,
	},
	{ 
		label: 'New Joiner Corner',
		path: JOINER_CORNER_PATH,
	},
];

export const footerNavigation = [
	{
		label: 'Privacy Policy',
		path: KNOWLEDGE_MGT_PATH,
	},
	{ 
		label: 'Disclaimer',
		path: TOTAL_REWARDS_PATH,
	},
	{ 
		label: 'Terms of Use',
		path: CAREER_DEV_PATH,
	},
	{ 
		label: 'Rules & Regulations',
		path: POLICIES_PATH,
	},
];

export const headerDropdowns = [
    {
      	label: 'My Profile',
      	icon: PersonOutlineOutlinedIcon,
		path: USER_PROFILE_PATH,
    },
	{
		label: 'Settings',
		icon: VpnKeyOutlinedIcon,
		path: SETTINGS_PATH,
	},
	{
		label: 'Logout',
		icon: LogoutOutlinedIcon,
		path: LOGOUT_PATH,
	},
];

const links = [topNavPages, footerNavigation, headerDropdowns];

export default links;
