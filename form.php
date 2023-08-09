<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $email = $_POST["email"];
    $telephone = $_POST["telephone"];
    $sujet = $_POST["sujet"];
    $message = $_POST["message"];

    // Mettez votre adresse email ici
    $destinataire = "1fatmataieb1@gmail.com";

    $sujetEmail = "Nouveau message de contact de $nom $prenom";

    $contenuEmail = "Nom: $nom\n";
    $contenuEmail .= "Prénom: $prenom\n";
    $contenuEmail .= "Email: $email\n";
    $contenuEmail .= "Téléphone: $telephone\n";
    $contenuEmail .= "Sujet: $sujet\n";
    $contenuEmail .= "Message: $message\n";

    // Envoi de l'email
    mail($destinataire, $sujetEmail, $contenuEmail);

    // Redirection vers une page de confirmation
    header("Location: confirmation.html");
    exit;
}
?>
