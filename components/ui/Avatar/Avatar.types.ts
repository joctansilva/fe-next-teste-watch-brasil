export interface AvatarProps {
  /**
   * Avatar size.
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Whether to show the user name beside the avatar.
   * @default false
   */
  showName?: boolean;
  /**
   * The user name.
   */
  userName?: string;
  /**
   * Additional CSS classes.
   */
  className?: string;
}
