import { Image, Menu, Portal} from "@chakra-ui/react";

export default function ProfileDropdown({onLogOut}){
  const links=[
        {
            title: "My Profile",
            href: "/profile",
            color:"#d2ac71"
        },
        {
            title: "Saved Bundles",
            href: "/bundles",
        },
        {
            title: "Invite Friends",
            href: "/friends",
        },
        {
            title: "Settings",
            href: "/settings",
        },
    ];
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
          <Image src="/imgs/Generic avatar.svg" alt="Avatar Icon" cursor="pointer" />
      </Menu.Trigger>
      <Portal>
          <Menu.Positioner m="8px -48px">
            <Menu.Content borderRadius="3xl" backgroundColor="#f6eee5" padding="6px" position="absolute">
                {links.map((link) => (
                <Menu.Item key={link.href} asChild value={link.title} color={link.color} cursor="pointer">
                    <a href={link.href} target="_blank" rel="noreferrer" > {link.title} </a>
                </Menu.Item>
                ))}
                <Menu.Item value="logout" color="red.500" cursor="pointer" onClick={onLogOut}>Logout</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};