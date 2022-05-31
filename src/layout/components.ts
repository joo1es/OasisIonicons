export default [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'Component',
        children: [
            {
                title: 'Icon',
                link: '/components/icon'
            }
        ]
    }
] as Menu[]

export interface Menu {
    title: string,
    link?: string,
    children?: Menu[]
}