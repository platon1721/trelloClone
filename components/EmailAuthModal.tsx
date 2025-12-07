import {TouchableOpacity, View, Text, TextInput, StyleSheet, ActivityIndicator, Alert} from "react-native";
import {ModalType} from '../types/enums';
import {Ionicons} from '@expo/vector-icons'
import {BottomSheetView} from "@gorhom/bottom-sheet"
import {useState} from "react";
import { useAuth } from "../context/AuthContext";
import { Colors } from "../constants/Colors";

interface EmailAuthModalProps {
    authType: ModalType | null;
    onBack?: () => void;
}

const EmailAuthModal = ({authType, onBack}: EmailAuthModalProps) => {

    const {signIn, signUp} = useAuth();

    const isSignUp = authType === ModalType.SignUp;
    const [firstName, setFirstName] = useState("");
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handeAuth = async () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert("Please fill in all fields");
            return;
        }

        if (isSignUp) {
            if (password !== confirmPassword) {
                Alert.alert("Passwords do not match");
                return;
            }
            if (password.length < 8) {
                Alert.alert("Password must be at least 8 characters");
                return;
            }
        }
        setLoading(true);
        try {
            let result;

            if (isSignUp) {
                result = await signUp(
                    email.trim(),
                    password,
                    firstName.trim()
                )
            } else {
                result = await signIn(
                    email.trim(),
                    password
                );
            }
            if (result.error) {
                const action = isSignUp ? "Sign Up" : "Sign In";
                Alert.alert(action + " failed", result.error.message);
            }
        } catch (error) {
            console.error("An unexpected error occurred:" , error);
            Alert.alert("An unexpected error occurred");
        } finally {
            setLoading(false);
        }
    }


    return (
        <BottomSheetView style={styles.modalContainer}>
            <View style={styles.modalHeader}>
                <TouchableOpacity onPress={onBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={"black"}/>
                </TouchableOpacity>
                <Text style={styles.modalTitle}>
                    {isSignUp ? "Register" : "Log in"}
                </Text>
            </View>

                {isSignUp && (
                    <TextInput
                        style={styles.input}
                        placeholder="First Name"
                        value={firstName}
                        onChangeText={setFirstName}
                        editable={!loading}
                    />
                )}
                <TextInput
                    style={styles.input}
                    placeholder="Email address"
                    value={email}
                    onChangeText={setEmail}
                    editable={!loading}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    secureTextEntry
                    onChangeText={setPassword}
                    editable={!loading}
                />
                {isSignUp && (
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        secureTextEntry
                        onChangeText={setConfirmPassword}
                        editable={!loading}
                    />
                )}
                <TouchableOpacity style={[styles.primaryButton, loading && styles.disabledButton]}
                                  onPress={handeAuth}
                                  disabled={loading}>
                    {loading ? (
                        <ActivityIndicator color={"white"} size={"small"}/>
                    ) : (
                        <Text style={styles.primaryButtonText}>
                            {isSignUp ? "Sign Up" : "Log In"}
                        </Text>
                    )}
                </TouchableOpacity>
        </BottomSheetView>
    )
}


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        padding: 20,
        gap: 16,
    },
    modalHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 16,
        position: "relative",
    },
    backButton: {
        position: "absolute",
        left: 16,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "black",
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
    },
    primaryButton: {
        backgroundColor: Colors.primary,
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: "center",
    },
    primaryButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
    disabledButton: {
        opacity: 0.5,
    },
})

export default EmailAuthModal;