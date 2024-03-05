interface LinkData {
    href: string;
    text: string;
    pageName: string;
    asLink?: boolean,
}

export const Links: LinkData[] = [
    // {
    //     href: '/',
    //     text: 'Home',
    //     pageName: 'home',
    // },
    {
        href: '/services',
        text: 'Services',
        pageName: 'services',
    },
    {
        href: '/case_study',
        text: 'Case Study',
        pageName: 'case_study',
    },
    {
        href: '/blog',
        text: 'Blog',
        pageName: 'blog',
    },
    {
        href: '/company',
        text: 'Company',
        pageName: 'company',
    },
    {
        href: '/contact_us',
        text: 'Contact Us',
        pageName: 'contact_us',
    },
];