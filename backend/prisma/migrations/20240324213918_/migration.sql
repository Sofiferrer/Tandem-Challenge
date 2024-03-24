BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Person] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombreYApellido] VARCHAR(70) NOT NULL,
    [email] VARCHAR(100) NOT NULL,
    [telefono] INT NOT NULL,
    [dni] INT NOT NULL,
    [fechaCreacion] DATETIME2 NOT NULL CONSTRAINT [Person_fechaCreacion_df] DEFAULT CURRENT_TIMESTAMP,
    [fechaModificacion] DATETIME2 NOT NULL CONSTRAINT [Person_fechaModificacion_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Person_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Person_email_key] UNIQUE NONCLUSTERED ([email]),
    CONSTRAINT [Person_telefono_key] UNIQUE NONCLUSTERED ([telefono]),
    CONSTRAINT [Person_dni_key] UNIQUE NONCLUSTERED ([dni])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
