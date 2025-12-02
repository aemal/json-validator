"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function JsonValidator() {
  const [jsonInput, setJsonInput] = useState("");
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean;
    message: string;
  } | null>(null);

  const validateJson = () => {
    try {
      JSON.parse(jsonInput);
      setValidationResult({
        isValid: true,
        message: "Valid JSON!"
      });
    } catch (error) {
      setValidationResult({
        isValid: false,
        message: error instanceof Error ? error.message : "Invalid JSON"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          JSON Validator
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter JSON:
            </label>
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <Editor
                height="400px"
                defaultLanguage="json"
                value={jsonInput}
                onChange={(value) => setJsonInput(value || "")}
                options={{
                  minimap: { enabled: false },
                  lineNumbers: "on",
                  wordWrap: "on",
                  automaticLayout: true,
                  tabSize: 2,
                  insertSpaces: true,
                  fontSize: 14,
                }}
                theme="vs-light"
              />
            </div>
          </div>

          <button
            onClick={validateJson}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Validate JSON
          </button>

          {validationResult && (
            <div className="mt-6">
              <div
                className={`p-4 rounded-md ${
                  validationResult.isValid
                    ? "bg-green-50 border border-green-200"
                    : "bg-red-50 border border-red-200"
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`flex-shrink-0 ${
                      validationResult.isValid ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {validationResult.isValid ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="ml-3">
                    <p
                      className={`text-sm font-medium ${
                        validationResult.isValid ? "text-green-800" : "text-red-800"
                      }`}
                    >
                      {validationResult.message}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}