<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Mettez ici votre adresse e-mail où vous souhaitez recevoir les informations
    $to = "1fatmataieb1@gmail.com" ;
    $subject = "Nouveau message de $name";

    $headers = "From: $email" . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    // Construire le corps du message
    $email_body = "Vous avez reçu un nouveau message de $name :\n\n";
    $email_body .= "Nom: $name\n";
    $email_body .= "E-mail: $email\n";
    $email_body .= "Message:\n$message";

    // Envoyer l'e-mail
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi du message.";
    }
}
?>
