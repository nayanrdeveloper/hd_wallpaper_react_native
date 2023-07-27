import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigations/StackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}