import {TouchableOpacity, View } from "react-native";
import {ModalType} from '../types/enums';
import {Ionicons} from '@expo/vector-icons'
import {BottomSheetView} from "@gorhom/bottom-sheet"

interface EmailAuthModalProps {
    authType: ModalType | null;
    onBack?: () => void;
}

const EmailAuthModal = ({authType, onBack}: EmailAuthModalProps) => {
    return(
        <BottomSheetView>
            <View>
                <TouchableOpacity onPress={onBack}>
                    <Ionicons name="arrow-back" size={24} color={"black"}/>
                </TouchableOpacity>
            </View>
        </BottomSheetView>
    )
}

export default EmailAuthModal;