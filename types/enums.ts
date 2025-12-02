export enum ModalType {
    Login = 'login',
    SignUp = 'signup',
}

export interface Board {
    id: string;
    creator: string;
    title: string;
    created_at: string;
    background: string;
    last_edit: null;
}

export interface User {
    avatar_url: string;
    email: string;
    first_name: string;
    id: string;
    username: null;
}