export interface AvatarProps {
  /**
   * Tamanho do avatar
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Exibir nome do usuário ao lado do avatar
   * @default false
   */
  showName?: boolean;
  /**
   * Nome do usuário
   */
  userName?: string;
  /**
   * Classes CSS adicionais
   */
  className?: string;
}
