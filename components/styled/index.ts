import { AppBar, Button, Drawer, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import tw, { styled } from "twin.macro";

type NavItemProps = {
    active: boolean;
};

type StyledButtonProps = {
    [x: string]: any;
    shade?: "light" | "dark";
};

type GridType = {
    [x: string]: any;
    inline?: boolean;
};

type SidebarType = {
    show: boolean;
};

type DashboardMainSectionType = {
    sidebarVisible: boolean;
};

type AppbarType = {
    sidebarVisible: boolean;
};

export const StyledHeader = styled.div(() => [
    tw`flex flex-row w-full px-6 h-24 border-b items-center sticky`,
]);

export const StyledFooter = styled.div(() => [
    tw`flex w-full px-6 md:px-12 py-3 md:py-6 border-t`,
    tw`bg-blueGray-900 text-white`,
]);

export const StyledButton = styled(Button)(
    ({ size, color, shade }: StyledButtonProps) => [
        tw`rounded-lg text-sm font-semibold font-sans shadow-none gap-2`,
        tw`hover:shadow-none`,
        size === "large" ? tw`px-6 py-4` : tw`px-5 py-3`,
        color === "secondary" && tw`bg-blueGray-700 hover:bg-blueGray-800`,
        shade === "light" && tw`bg-amber-50 hover:bg-amber-100 text-amber-700`,
    ]
);

export const StyledNavItem = styled.li(({ active }: NavItemProps) => [
    tw`flex uppercase cursor-pointer text-sm font-semibold text-gray-400 h-full`,
    tw`px-3 transition-colors items-center border-b-[3px] border-transparent`,
    tw`hover:bg-red-50 hover:text-red-500 hover:border-b-[3px] hover:border-red-500`,
    active && tw`bg-red-50 text-red-500 border-b-[3px] border-red-500`,
]);

export const StyledHeroSection = styled.section(() => [
    tw`bg-amber-50 w-full md:min-h-[76vh]`,
]);

export const MainSection = styled.section(() => [
    tw`pt-12 md:pt-24 bg-white w-full`,
]);

export const GridRowDouble = styled.section(() => [
    tw`grid grid-cols-1 md:grid-cols-2 py-6 md:py-2 gap-3`,
]);

export const GridRowTriple = styled.section(({ inline }: GridType) => [
    inline ? tw`inline-grid` : tw`grid`,
    tw`grid-cols-1 md:grid-cols-3 py-6 md:py-2 gap-3`,
]);

export const HeroCTA = styled.div(() => [
    tw`flex flex-col justify-center pr-6`,
]);

export const ListStyleType = tw.div`flex items-center justify-center rounded-full bg-blueGray-800 text-white w-10 h-10 mx-auto`;

export const FeatureBoxItem = styled.li(() => [
    tw`flex flex-col space-y-4 px-2 py-4 rounded-lg bg-amber-50 text-gray-700 border-[1px]`,
]);

export const FeedBackPreviewSection = styled.section(() => [
    tw`bg-cover relative bg-fixed`,
]);

export const Backdrop = styled.div(() => [
    tw`absolute inset-0 bg-black opacity-60 z-0`,
]);

export const CTASection = styled.section(() => [
    tw`bg-amber-50 text-gray-700 py-10`,
]);

export const PageHeader = styled.section(() => [
    tw`bg-amber-50 p-12 w-full flex flex-col items-center justify-center md:min-h-[11rem]`,
    tw`bg-contain bg-repeat bg-opacity-60`,
]);

export const InputStyled = styled.input(() => [
    tw`rounded-lg p-3 w-full bg-red-700 outline-none border-[1px] border-red-700 text-red-50`,
    tw`focus:outline-none placeholder:text-red-100`,
]);

export const StyledTextArea = styled.textarea(() => [
    tw`rounded-lg p-3 w-full bg-red-700 outline-none border-[1px] border-red-700 text-red-50`,
    tw`focus:outline-none placeholder:text-red-100 focus:ring-0 focus:border-[1px] focus:border-red-700`,
]);

export const StyledAppBar = styled(AppBar)<AppbarType>(({ sidebarVisible }) => [
    tw`ml-[240px] w-[calc(100% - 240px)] flex-1 transition-all ease-in-out delay-150`,
    tw`border-b border-stone-200 bg-white`,
    !sidebarVisible && tw`ml-0 w-full`,
]);

export const StyledDrawer = styled(Drawer)(() => [
    tw`bg-blueGray-800 text-white`,
]);

export const StyledDrawerToolBar = styled(Toolbar)(() => [
    tw`bg-slate-50 shadow-none`,
]);

export const DashboardContainer = styled.section(() => [tw`h-screen flex`]);

export const SideBar = styled.section<SidebarType>(({ show }) => [
    tw`w-[240px] h-full fixed bg-slate-800 text-white transition-all ease-in-out delay-150`,
    !show && tw`w-0`,
]);

export const DashboardMainSection = styled.section<DashboardMainSectionType>(
    ({ sidebarVisible }) => [
        tw`w-[calc(100% - 240px)] ml-[240px] flex-1 transition-all ease-in-out delay-150`,
        tw`h-full overflow-y-scroll relative`,
        !sidebarVisible && tw`w-full ml-0`,
    ]
);

export const StyledContentBox = styled(Box)(() => [
    tw`mt-16 clear-both bg-slate-100`,
]);
