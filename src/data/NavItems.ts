import { NavItem, DropDown } from '../Types/Types.ts'

export const navItems: NavItem[] = [
    { value: 'Terror', id: 'terror' },
    { value: 'Ação', id: 'acao' },
    { value: 'FPS', id: 'fps' },
    { value: 'RPG', id: 'rpg' },
    { value: '+Jogos', id: '/games' },
]

export const UnLoggedDropDown:DropDown[] =[
    {value:'Login', link:'/login'},
    {value:'Cadastrar', link:'/cadastro'},
    {value:'Games', link:'/games'},
    {value:'Home', link:'/'}
]

export const LoggedDropDown:DropDown[] = [
    { value: 'Perfil', link: '/perfil' },
    { value: 'Configurações', link: '/configuracoes' },
    { value: 'Sair', link: '/sair' },
];